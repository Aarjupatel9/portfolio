"use client";
import './globals.css';
import { useState, useEffect } from 'react';
import colorContext from '../context/colorContext';
import { HomeIcon, BriefcaseIcon, UserCircleIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [color, setColor] = useState<string>("bg-indigo-500");
    const PathName = usePathname();
    const SideBarLinks = [
        {
            label: <HomeIcon className="h-6 w-6" />,
            href: "/",
            bgColor: "bg-indigo-500",
            tooltip: "Home",
            name: "Home"
        },
        {
            label: <UserCircleIcon className="h-6 w-6" />,
            href: "/about",
            bgColor: "bg-indigo-500",
            tooltip: "About",
            name: "About"
        },
        {
            label: <BriefcaseIcon className="h-6 w-6" />,
            href: "/projects",
            bgColor: "bg-pink-500",
            tooltip: "Projects",
            name: "Projects"
        },
        {
            label: <PhoneIcon className="h-6 w-6" />,
            href: "/contact",
            bgColor: "bg-cyan-500",
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
        <html lang="en">
            <body className="bg-[#0a0a0f] text-white m-0 p-0 flex h-screen md:flex-row flex-col overflow-hidden">
                <Toaster 
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: '#111118',
                            color: '#f8fafc',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        },
                    }}
                />
                <nav className="md:border-r border-[rgba(255,255,255,0.1)] md:h-full md:w-24 w-full md:h-auto h-16 bg-[#111118]/50 backdrop-blur-xl md:flex-col flex-row flex items-center justify-center md:justify-start md:py-8 z-50">
                    <ul className="list-none m-0 p-0 flex h-full w-full justify-around md:justify-center align-center flex-row md:flex-col gap-2">
                        <colorContext.Provider value={{ color, setColor }}>
                            {
                                SideBarLinks.map((link, index) => {
                                    const isActive = PathName === link.href;
                                    return (
                                        <li key={index} className="m-0 p-0 flex align-center justify-center w-full">
                                            <Link
                                                href={link.href}
                                                className={`
                                                    relative flex items-center justify-center 
                                                    w-12 h-12 md:w-14 md:h-14 
                                                    rounded-xl 
                                                    transition-all duration-300 ease-out
                                                    group
                                                    ${isActive 
                                                        ? `${link.bgColor} shadow-lg shadow-current/50 scale-105` 
                                                        : 'hover:bg-white/5 text-gray-400 hover:text-white'
                                                    }
                                                `}
                                                onClick={() => {
                                                    setColor(link.bgColor);
                                                }}
                                            >
                                                <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </colorContext.Provider>
                    </ul>
                </nav>
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </body>
        </html >
    );
}