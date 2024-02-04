"use client"
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Page() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <section className="container h-screen w-full flex items-center flex-col justify-center" >
                <Particles
                    id="tsparticles"
                    className="absolute top-0 left-0 inset-0 -z-50"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            enable: false,
                        },
                        background: {
                            color: {
                                value: "#000000",
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
                                    enable: false,
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#FF0066",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 40,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="text-4xl mb-2">Hey, I am <span className="text-[#FF0066] font-bold">Aarju</span></div>
                <div className="flex justify-center items-center">
                    {/* <span className="m-0 p-0 inline text-3xl font-bold text-center">I am&nbsp;</span> */}
                    <Typewriter
                        options={{
                            strings: ['I am  Software Developer', 'Experience In Nodejs Android Socket.IO'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 10,
                            wrapperClassName: 'm-0 p-0 inline text-3xl font-bold text-center text-[#FF0066]'
                        }}
                    />
                </div>
                <Link href="/about" className={`mt-4 text-2xl border-[#FF0066] transition-all duration-300 hover:bg-[#FF0066] p-3 neon-button transform -skew-x-12 text-white`}>Let&apos;s get started 🚀</Link>
            </section >
        </>
    )
}