"use client"
import Image from 'next/image';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);

    async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const message = formData.get("message") as string

        setIsLoading(true);
        const loader = document.getElementById("contact_page_loader") as HTMLElement
        if (loader) {
            loader.style.display = "block";
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success('Your message has been sent successfully!');
            e.currentTarget?.reset();
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "An error occurred! Please try again after sometime.");
            console.error(err);
        } finally {
            setIsLoading(false);
            if (loader) {
                loader.style.display = "none";
            }
        }
    }

    return (
        <div className="animate-fade-in">
            {/* Contact Form */}
            <div className="glassmorphism p-6 md:p-12 mb-8 md:mb-12">
                <form onSubmit={sendEmail} className="space-y-5 md:space-y-6">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                            Your Name
                        </label>
                        <input
                            name='name'
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-sm md:text-base font-medium"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-sm md:text-base font-medium"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            name='message'
                            id="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none text-sm md:text-base font-medium"
                            placeholder="Tell me about your project or just say hello!"
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-black text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Sending Message...</span>
                            </>
                        ) : (
                            <>
                                <PaperAirplaneIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Social Links */}
            <div className="text-center px-4">
                <p className="text-gray-400 font-bold mb-6 italic">Or connect with me on social media</p>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    <a
                        className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/Aarju_patel_9"
                    >
                        <Image src="/assets/Twitter.svg" alt="Twitter" height={28} width={28} className="opacity-70 group-hover:opacity-100 transition-all md:w-8 md:h-8" />
                    </a>
                    <a
                        className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Aarjupatel9"
                    >
                        <svg
                            height="28"
                            width="28"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            version="1.1"
                            className="opacity-70 group-hover:opacity-100 transition-all md:w-8 md:h-8"
                        >
                            <path
                                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/aarju-patel-912075237/"
                    >
                        <Image src="/assets/Linkedin.svg" alt="LinkedIn" height={28} width={28} className="opacity-70 group-hover:opacity-100 transition-all md:w-8 md:h-8" />
                    </a>
                </div>
            </div>

            {/* Loader */}
            <div className="loader" id='contact_page_loader'>
                <div className="loading"></div>
            </div>
        </div>
    );
}
