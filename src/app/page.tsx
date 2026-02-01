import Hero from '../components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aarju Patel | Portfolio Home',
    description: 'Welcome to the official portfolio of Aarju Patel, a Software Developer architecting high-performance, real-time ecosystems and modern web experiences.',
};

export default function Page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Aarju Patel',
        jobTitle: 'Software Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'Crest Data',
        },
        url: 'https://aarjupatel.com',
        sameAs: [
            'https://github.com/Aarjupatel9',
            'https://twitter.com/Aarju_patel_9',
            'https://www.linkedin.com/in/aarju-patel-912075237/'
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
        </>
    );
}