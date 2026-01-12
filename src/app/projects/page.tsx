"use client";
import Projects from "../../data/projects";
import { CodeBracketIcon, GlobeAltIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Projects</h1>
                <p className="text-xl text-gray-400">Showcasing my work and contributions</p>
            </div>
            
            <div className="grid gap-8">
                {Projects.map((project, index) => {
                    return (
                        <div 
                            key={project.title}
                            className="glassmorphism p-8 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                                            {project.title}
                                        </h2>
                                    </div>
                                    
                                    {project.tagline && (
                                        <p className="text-lg text-indigo-400 font-medium mb-4">
                                            {project.tagline}
                                        </p>
                                    )}
                                    
                                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 rounded-lg text-sm font-medium text-gray-200 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-4">
                                        {project.githubLinks.map((repo, repoIndex) => (
                                            <a
                                                key={repoIndex}
                                                href={repo.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                                            >
                                                <CodeBracketIcon className="h-5 w-5 text-indigo-400" />
                                                <span className="font-medium">{repo.disc}</span>
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ))}

                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                                            >
                                                <GlobeAltIcon className="h-5 w-5" />
                                                <span>Live Demo</span>
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
