import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    return forwarded?.split(',')[0] || realIP || 'unknown';
}

function sanitizeInput(str: string): string {
    if (typeof str !== 'string') return '';
    // Remove HTML tags, dangerous characters, and control characters
    return str
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .replace(/[\r\n]/g, '') // Remove CRLF to prevent header injection
        .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
        .trim();
}

function sanitizeForEmail(str: string): string {
    // More aggressive sanitization for email headers (subject, from, replyTo)
    if (typeof str !== 'string') return '';
    return str
        .replace(/[\r\n]/g, '') // Critical: Remove CRLF to prevent email header injection
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .replace(/[\x00-\x1F\x7F]/g, '')
        .replace(/[^\x20-\x7E]/g, '') // Only allow printable ASCII
        .trim();
}

function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function validateEmail(email: string): boolean {
    // Check for CRLF injection attempts
    if (/[\r\n]/.test(email)) return false;
    
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
    try {
        // Validate Content-Type
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return NextResponse.json(
                { error: 'Invalid content type' },
                { status: 400 }
            );
        }

        // Limit request body size (prevent DoS)
        const body = await request.json().catch(() => null);
        if (!body || typeof body !== 'object') {
            return NextResponse.json(
                { error: 'Invalid request body' },
                { status: 400 }
            );
        }

        // Check for excessive payload size
        const bodySize = JSON.stringify(body).length;
        if (bodySize > 10000) { // 10KB limit
            return NextResponse.json(
                { error: 'Request payload too large' },
                { status: 413 }
            );
        }

        const clientIP = getClientIP(request);
        let { name, email, message } = body;

        // Validate input exists
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Trim and sanitize inputs with type coercion
        name = sanitizeForEmail(String(name || ''));
        email = sanitizeForEmail(String(email || '')).toLowerCase();
        message = sanitizeInput(String(message || ''));

        // Validate name
        if (name.length < 2 || name.length > 100) {
            return NextResponse.json(
                { error: 'Name must be between 2 and 100 characters' },
                { status: 400 }
            );
        }

        // Validate email
        if (!validateEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.length < 5 || message.length > 2000) {
            return NextResponse.json(
                { error: 'Message must be between 5 and 2000 characters' },
                { status: 400 }
            );
        }

        // Check for suspicious patterns (basic spam detection)
        const spamPatterns = [
            /http[s]?:\/\//gi,
            /www\./gi,
            /bit\.ly|tinyurl|goo\.gl/gi,
        ];
        const suspiciousLinks = spamPatterns.some(pattern => pattern.test(message));
        if (suspiciousLinks && message.split(/\s+/).length < 20) {
            return NextResponse.json(
                { error: 'Message contains suspicious content' },
                { status: 400 }
            );
        }

        // Get SMTP configuration from environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPassword = process.env.SMTP_PASSWORD;
        const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser; // Default to sender email if not set

        if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
            console.error('SMTP configuration is missing');
            return NextResponse.json(
                { error: 'Email service configuration error' },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(smtpPort, 10),
            secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        // Format message with proper HTML escaping
        const formattedMessage = escapeHtml(message).replace(/\n/g, '<br>');

        // Email content with improved template
        // Use sanitized values to prevent email header injection
        const safeName = sanitizeForEmail(name);
        const safeEmail = email; // Already validated and sanitized
        
        const mailOptions = {
            from: `"Portfolio Contact" <${smtpUser}>`,
            replyTo: safeEmail, // Safe: validated email format, no CRLF
            to: recipientEmail,
            subject: `New Contact: ${safeName}`, // Safe: sanitized, no CRLF
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f1f5f9; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                📧 New Contact Form Submission
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 30px 0; color: #64748b; font-size: 16px; line-height: 1.6;">
                                You have received a new message from your portfolio contact form.
                            </p>
                            
                            <!-- Contact Info Card -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; margin-bottom: 30px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 20px; border-bottom: 1px solid #e2e8f0;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <strong style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From:</strong>
                                                </td>
                                                <td style="padding: 8px 0; text-align: right;">
                                                    <span style="color: #0f172a; font-size: 16px; font-weight: 600;">${escapeHtml(name)}</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <strong style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                                                </td>
                                                <td style="padding: 8px 0; text-align: right;">
                                                    <a href="mailto:${escapeHtml(email)}" style="color: #6366f1; font-size: 16px; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Card -->
                            <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                    Message
                                </h2>
                                <div style="color: #475569; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">
                                    ${formattedMessage}
                                </div>
                            </div>
                            
                            <!-- Action Button -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="mailto:${escapeHtml(email)}" style="display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);">
                                            Reply to ${escapeHtml(name)}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5;">
                                This email was sent from your portfolio contact form.<br>
                                <span style="color: #cbd5e1;">IP: ${clientIP} | Time: ${new Date().toLocaleString()}</span>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
            text: `
NEW CONTACT FORM SUBMISSION

From: ${safeName}
Email: ${safeEmail}

Message:
${message}

---
This email was sent from your portfolio contact form.
IP: ${clientIP} | Time: ${new Date().toLocaleString()}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
