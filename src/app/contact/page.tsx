import ContactForm from '../../components/ContactForm';
import "./page.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Aarju Patel. Let&apos;s connect and build something amazing together. Reach out for software development projects, collaborations, or just to say hello!',
};

export default function page() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-4xl">
            <div className="animate-fade-in">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 gradient-text tracking-tight">Get In Touch</h1>
                    <p className="text-lg md:text-xl text-gray-400 font-medium px-4">Let&apos;s connect and build something amazing together</p>
                </div>

                <ContactForm />
            </div>
        </div>
    )
}