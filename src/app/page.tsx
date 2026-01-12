"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Particles loaded
    }, []);
    
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <Particles
                id="tsparticles"
                className="absolute top-0 left-0 inset-0 -z-10"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                    },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#6366f1",
                        },
                        links: {
                            color: "#6366f1",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.7 },
                            animation: {
                                enable: true,
                                speed: 0.5,
                                minimumValue: 0.3,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 4 },
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 0.5,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
            
            <div className="container mx-auto px-6 text-center animate-fade-in">
                <div className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        Hey, I am{' '}
                        <span className="gradient-text">Aarju</span>
                    </h1>
                </div>
                
                <div className="flex justify-center items-center mb-8 min-h-[60px]">
                    <Typewriter
                        options={{
                            strings: [
                                'I am a Software Developer',
                                'I build Full-Stack Applications',
                                'Experience in Node.js & Android',
                                'Expert in Socket.IO & Real-time Systems'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 30,
                            wrapperClassName: 'text-2xl md:text-4xl font-semibold gradient-text'
                        }}
                    />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Link 
                        href="/about" 
                        className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                        Let&apos;s get started
                        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                        href="/projects" 
                        className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    >
                        View Projects
                        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}