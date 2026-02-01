import Image from 'next/image';
import { AcademicCapIcon, CodeBracketIcon, HeartIcon, MapPinIcon, BriefcaseIcon, TrophyIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Aarju Patel, a Software Developer at Crest Data. Discover my education, technical skills, and professional experience building scalable applications.',
};

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
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-6xl">
            <div className="animate-fade-in">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 gradient-text tracking-tight">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">Get to know me better</p>
                </div>

                {/* Profile Section */}
                <div className="glassmorphism p-6 md:p-8 mb-6 md:mb-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <div className=" group flex-shrink-0">
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div> */}
                        {/* <div className="relative"> */}
                            <Image
                                src="/assets/aarju.png"
                                height={200}
                                width={200}
                                alt="Aarju Patel"
                                className="rounded-full border-4 border-white/10 shadow-2xl h-40 w-40 p-1"
                            />
                        {/* </div> */}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-black mb-2 md:mb-3">
                            <span className="gradient-text">Aarju Patel</span>
                        </h2>
                        <p className="text-base md:text-xl text-gray-300 mb-4 font-bold italic">
                            Software Developer at <span className="text-teal-400">Crest Data</span>
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
                            <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                                <AcademicCapIcon className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
                                <span>B.Tech Computer Engineering</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                                <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 text-teal-400" />
                                <span>Ahmedabad, Gujarat</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Work */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="glassmorphism p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <AcademicCapIcon className="h-7 w-7 md:h-8 md:w-8 text-teal-400" />
                            <h3 className="text-xl md:text-2xl font-black">Education</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Currently pursuing my <span className="text-teal-400 font-bold">B.Tech in Computer Engineering</span> at
                            Birla Vishvakarma Mahavidyalaya Engineering College, Anand.
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm mt-auto pt-3 border-t border-white/5">
                            Completed 10th at Purusarth Mahavidhyalaya.
                        </p>
                    </div>

                    <div className="glassmorphism p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <BriefcaseIcon className="h-7 w-7 md:h-8 md:w-8 text-cyan-400" />
                            <h3 className="text-xl md:text-2xl font-black">Experience</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Working as a <span className="text-cyan-400 font-bold">Software Developer</span> at
                            Crest Data, Ahmedabad, focusing on building scalable, high-performance applications.
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="glassmorphism p-6 mb-6 md:mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <CodeBracketIcon className="h-7 w-7 md:h-8 md:w-8 text-teal-400" />
                        <h3 className="text-xl md:text-2xl font-black">Technical Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 md:px-4 md:py-2 bg-teal-500/10 border border-teal-500/20 rounded-lg text-xs md:text-sm font-bold text-teal-100 hover:border-teal-400 hover:scale-110 transition-all duration-300 shadow-lg shadow-teal-500/5"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="glassmorphism p-6 mb-6 md:mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <TrophyIcon className="h-7 w-7 md:h-8 md:w-8 text-amber-400" />
                        <h3 className="text-xl md:text-2xl font-black">Certifications</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a
                            href="https://www.credly.com/badges/24155c80-a830-40aa-b337-2e6d29f13396/linked_in_profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🏆</span>
                                    <h4 className="text-base md:text-lg font-black text-amber-400">ServiceNow CSM</h4>
                                </div>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs md:text-sm text-gray-400">Certified System Administrator</p>
                        </a>
                        <a
                            href="https://www.credly.com/badges/fd92fd09-8b9d-4686-950d-721838b6f441/linked_in?t=t8haij"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🏆</span>
                                    <h4 className="text-base md:text-lg font-black text-amber-400">ServiceNow CAD</h4>
                                </div>
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs md:text-sm text-gray-400">Certified Application Developer</p>
                        </a>
                    </div>
                </div>

                {/* About Text */}
                <div className="glassmorphism p-6 mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-black mb-4">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        I am an enthusiastic tech geek with a deep interest in <span className="text-teal-400 font-bold">backend development</span> and
                        <span className="text-cyan-400 font-bold"> real-time systems</span>. I love building high-performance applications that impact
                        users at scale.
                    </p>
                </div>

                {/* Interests */}
                <div className="glassmorphism p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <HeartIcon className="h-7 w-7 md:h-8 md:w-8 text-rose-400" />
                        <h3 className="text-xl md:text-2xl font-black">Interests & Hobbies</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className="group p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-rose-500/50 hover:bg-rose-500/5 transition-all duration-300"
                            >
                                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{interest.icon}</div>
                                <span className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white">{interest.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}