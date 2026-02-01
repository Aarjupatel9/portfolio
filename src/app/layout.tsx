import './globals.css';
import ClientLayout from '../components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Aarju Patel | Software Developer & Full-Stack Engineer',
        template: '%s | Aarju Patel'
    },
    description: 'Aarju Patel is a Software Developer at Crest Data, specializing in high-performance applications, real-time ecosystems, and modern web technologies.',
    keywords: ['Aarju Patel', 'Software Developer', 'Full-Stack Engineer', 'Crest Data', 'Ahmedabad', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Aarju Patel' }],
    creator: 'Aarju Patel',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://aarjupatel.com',
        title: 'Aarju Patel | Software Developer',
        description: 'Architecting high-performance, real-time ecosystems. Software Developer at Crest Data.',
        siteName: 'Aarju Patel Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aarju Patel | Software Developer',
        description: 'Architecting high-performance, real-time ecosystems. Software Developer at Crest Data.',
        creator: '@Aarju_patel_9',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <ClientLayout>
                {children}
            </ClientLayout>
        </html>
    );
}