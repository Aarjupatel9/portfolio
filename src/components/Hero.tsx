"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Particles loaded
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-80px)] w-full flex justify-center overflow-hidden pb-8 md:pt-8">
            <Particles
                id="tsparticles"
                className="absolute top-0 left-0 inset-0 -z-10"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 3 },
                            repulse: { distance: 150, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#2dd4bf" },
                        links: {
                            color: "#2dd4bf",
                            distance: 150,
                            enable: true,
                            opacity: 0.08,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 25,
                        },
                        opacity: {
                            value: { min: 0.05, max: 0.3 },
                            animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
                        },
                        shape: { type: "circle" },
                        size: {
                            value: { min: 1, max: 2 },
                            animation: { enable: true, speed: 1, minimumValue: 0.5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="container mb-2 px-4 md:px-6 text-center animate-fade-in relative z-10">
                <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md text-xs md:text-sm font-bold text-teal-400">
                    ✨ Elevating Digital Experiences
                </div>

                <div className="mb-6 md:mb-8 animate-float">
                    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight tracking-tighter">
                        Innovating the <br />
                        <span className="gradient-text">Future of System Design</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium px-4">
                        Hi, I&apos;m <span className="text-white font-bold">Aarju</span>. I architect high-performance, real-time ecosystems
                        that redefine the modern user experience.
                    </p>
                </div>

                <div className="flex justify-center items-center mb-10 md:mb-12 min-h-[30px] md:min-h-[40px]">
                    <Typewriter
                        options={{
                            strings: [
                                'Software Developer',
                                'Full-Stack Engineer',
                                'Real-time Systems Architect',
                                'Open Source Contributor'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                            wrapperClassName: 'text-lg md:text-2xl font-mono text-teal-400 px-4'
                        }}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-6">
                    <Link
                        href="/projects"
                        className="neon-button w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg font-bold text-white bg-teal-600 rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg shadow-teal-600/20"
                    >
                        Explore My Work
                        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg font-bold text-white border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/5 transition-all duration-300"
                    >
                        More About Me
                    </Link>
                </div>
            </div>

            {/* Background blur blobs - Cyan and deep Blue */}
            <div className="absolute top-1/4 -left-10 md:-left-20 w-48 h-48 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-[80px] md:blur-[120px] -z-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-10 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] -z-20 animate-pulse"></div>
        </section>
    )
}
