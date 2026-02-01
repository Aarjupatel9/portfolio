"use client";
import { useState, useEffect } from 'react';
import colorContext from '../context/colorContext';
import { HomeIcon, BriefcaseIcon, UserCircleIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [color, setColor] = useState<string>("bg-teal-500");
    const PathName = usePathname();
    const SideBarLinks = [
        {
            label: <HomeIcon className="h-5 w-5" />,
            href: "/",
            bgColor: "bg-teal-500",
            tooltip: "Home",
            name: "Home"
        },
        {
            label: <UserCircleIcon className="h-5 w-5" />,
            href: "/about",
            bgColor: "bg-cyan-500",
            tooltip: "About",
            name: "About"
        },
        {
            label: <BriefcaseIcon className="h-5 w-5" />,
            href: "/projects",
            bgColor: "bg-sky-500",
            tooltip: "Projects",
            name: "Projects"
        },
        {
            label: <PhoneIcon className="h-5 w-5" />,
            href: "/contact",
            bgColor: "bg-blue-500",
            tooltip: "Contact",
            name: "Contact"
        }
    ];

    useEffect(() => {
        const currentLink = SideBarLinks.find(link => link.href === PathName);
        if (currentLink) {
            setColor(currentLink.bgColor);
        }
    }, [PathName]);

    return (
        <body className="bg-[#030305] text-white m-0 p-0 flex flex-col min-h-screen">
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#0a0a0f',
                        color: '#f8fafc',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(10px)',
                    },
                }}
            />

            <header className="fixed top-0 left-0 right-0 z-[100] glass-nav nav-glow h-16 md:h-16">
                <div className="h-full flex items-center justify-start gap-4 md:gap-12 px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <Image
                                src="/assets/aarju.png"
                                alt="Aarju Patel Logo"
                                fill
                                priority
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 36px, 44px"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-extrabold tracking-tighter">
                            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Aarju Patel
                            </span>
                        </span>
                    </Link>

                    <nav className="h-full flex-1">
                        <ul className="flex items-center h-full gap-1.5 md:gap-4 py-2" >
                            <colorContext.Provider value={{ color, setColor }}>
                                {
                                    SideBarLinks.map((link, index) => {
                                        const isActive = PathName === link.href;
                                        return (
                                            <li key={index} className={`h-full flex items-center`}>
                                                <Link
                                                    href={link.href}
                                                    className={`
                                                        relative flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 
                                                        rounded-xl text-[11px] md:text-sm font-bold
                                                        transition-all duration-300
                                                        group whitespace-nowrap
                                                       
                                                    `}
                                                    onClick={() => {
                                                        setColor(link.bgColor);
                                                    }}
                                                >
                                                    <span className={`transition-transform duration-300 py-2 ${isActive ? 'scale-110' : 'group-hover:scale-110 text-teal-400'}`}>
                                                        {link.label}
                                                    </span>
                                                    <span className="hidden md:block">{link.name}</span>
                                                    {isActive && (
                                                        <span className={`absolute bottom-0 left-1 right-1 h-0.5 ${link.bgColor} rounded-full`}></span>
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </colorContext.Provider>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-1 pt-16 md:pt-20">
                {children}
            </main>

            <footer className="py-12 border-t border-white/5 glass-nav mt-auto">
                <div className="container mx-auto text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Aarju Patel. Built with passion.</p>
                </div>
            </footer>
        </body>
    );
}
