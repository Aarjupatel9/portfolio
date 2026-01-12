"use client";
import Image from 'next/image';
import aarju_illustration from "../../assets/aarju_illustration.jpg";
import { AcademicCapIcon, CodeBracketIcon, HeartIcon, MapPinIcon, BriefcaseIcon, TrophyIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function page() {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Next.js', 'NodeJS', 
        'ExpressJS', 'MongoDB', 'MySQL', 'C', 'C++', 
        'Java', 'Kotlin', 'Socket.IO', 'ServiceNow'
    ];

    const interests = [
        { icon: '♟️', text: 'Playing Chess' },
        { icon: '🏏', text: 'Cricket & Volleyball' },
        { icon: '✈️', text: 'Traveling & Exploring' },
        { icon: '🧘‍♂️', text: 'Introspection & Solitude' }
    ];

    return (
        <div className="container mx-auto px-6 py-12 max-w-6xl">
            <div className="animate-fade-in">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">About Me</h1>
                    <p className="text-xl text-gray-400">Get to know me better</p>
                </div>

                {/* Profile Section */}
                <div className="glassmorphism p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative">
                            <Image 
                                src={aarju_illustration} 
                                height={250} 
                                width={250} 
                                alt="Aarju Patel" 
                                className="rounded-full border-4 border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-3">
                            <span className="gradient-text">Aarju Patel</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Software Developer at Crest Data
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="flex items-center gap-2 text-gray-400">
                                <AcademicCapIcon className="h-5 w-5 text-indigo-400" />
                                <span>B.Tech Computer Engineering</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPinIcon className="h-5 w-5 text-indigo-400" />
                                <span>Ahmedabad, Gujarat</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Work */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="glassmorphism p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <AcademicCapIcon className="h-8 w-8 text-indigo-400" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Currently pursuing my <span className="text-indigo-400 font-semibold">B.Tech in Computer Engineering</span> at 
                            Birla Vishvakarma Mahavidyalaya Engineering College, Vvnagar, Anand.
                        </p>
                        <p className="text-gray-400 text-sm mt-3">
                            Completed 10th at Purusarth Mahavidhyalaya, Bhanvad
                        </p>
                    </div>

                    <div className="glassmorphism p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <BriefcaseIcon className="h-8 w-8 text-pink-400" />
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Working as a <span className="text-pink-400 font-semibold">Software Developer</span> at 
                            Crest Data, Ahmedabad, focusing on building scalable applications.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="glassmorphism p-6 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <CodeBracketIcon className="h-8 w-8 text-cyan-400" />
                        <h3 className="text-2xl font-bold">Technical Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 rounded-lg text-sm font-medium text-gray-200 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="glassmorphism p-6 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <TrophyIcon className="h-8 w-8 text-yellow-400" />
                        <h3 className="text-2xl font-bold">Certifications</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a
                            href="https://www.credly.com/badges/24155c80-a830-40aa-b337-2e6d29f13396/linked_in_profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🏆</span>
                                    <h4 className="text-lg font-semibold text-yellow-400">ServiceNow CSM</h4>
                                </div>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-gray-400">Certified System Administrator</p>
                        </a>
                        <a
                            href="https://www.credly.com/badges/fd92fd09-8b9d-4686-950d-721838b6f441/linked_in?t=t8haij"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🏆</span>
                                    <h4 className="text-lg font-semibold text-yellow-400">ServiceNow CAD</h4>
                                </div>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-gray-400">Certified Application Developer</p>
                        </a>
                    </div>
                </div>

                {/* About Text */}
                <div className="glassmorphism p-6 mb-8">
                    <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I am an enthusiastic tech geek with a deep interest in <span className="text-indigo-400 font-semibold">backend development</span> and 
                        <span className="text-pink-400 font-semibold"> problem solving</span>. I have worked on numerous web development projects 
                        and love building real-time applications using modern technologies.
                    </p>
                </div>

                {/* Interests */}
                <div className="glassmorphism p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <HeartIcon className="h-8 w-8 text-pink-400" />
                        <h3 className="text-2xl font-bold">Interests & Hobbies</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <span className="text-2xl">{interest.icon}</span>
                                <span className="text-gray-300">{interest.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}