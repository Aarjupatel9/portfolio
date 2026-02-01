import Projects from "../../data/projects";
import { CodeBracketIcon, GlobeAltIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore the portfolio of Aarju Patel. Featuring high-performance web applications, real-time systems, and open-source contributions.',
};

export default function Page() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8 max-w-7xl">
            <div className="text-center mb-6 md:mb-8 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 gradient-text tracking-tight">Projects</h1>
                <p className="text-lg md:text-xl text-gray-400 font-medium">Showcasing my work and contributions</p>
            </div>

            <div className="grid gap-6 md:gap-8">
                {Projects.map((project, index) => {
                    return (
                        <div
                            key={project.title}
                            className="glassmorphism p-6 md:p-8 animate-fade-in group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col gap-4 md:gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <h2 className="text-2xl md:text-3xl font-black gradient-text tracking-tight">
                                            {project.title}
                                        </h2>
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                                            >
                                                <span>LIVE PREVIEW</span>
                                                <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                                            </a>
                                        )}
                                    </div>

                                    {project.tagline && (
                                        <p className="text-base md:text-lg text-teal-400/90 font-bold mb-3">
                                            {project.tagline}
                                        </p>
                                    )}

                                    <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2.5 py-1 md:px-3 md:py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-lg text-xs md:text-sm font-bold text-teal-100 hover:border-teal-400/50 hover:bg-teal-500/20 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                                        {project.githubLinks.map((repo, repoIndex) => (
                                            <a
                                                key={repoIndex}
                                                href={repo.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 text-sm md:text-base font-bold"
                                            >
                                                <CodeBracketIcon className="h-5 w-5 text-teal-400 group-hover/btn:scale-110 transition-transform" />
                                                <span>{repo.disc}</span>
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            </a>
                                        ))}

                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-white font-black hover:shadow-lg hover:shadow-teal-500/40 hover:scale-[1.03] transition-all duration-300 text-sm md:text-base"
                                            >
                                                <GlobeAltIcon className="h-5 w-5" />
                                                <span>Visit Site</span>
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
