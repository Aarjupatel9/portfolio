"use client";
import Projects from "../../data/projects";

export default function Page() {
    return (
        <div className="overflow-auto container">
            <center>
                <h1 className="text-[#FF0000] p-2 font-bold underline text-5xl">Projects</h1>
            </center>
            {Projects.map((project) => {
                return (
                    <div className=" m-0 p-0" key={project.title}>
                        <div className="project-info border-2 border-white hover:border-[#FF0000] glassmorphism m-2 p-4 rounded-lg shadow-md">
                            <h2 className="text-[#FF0000] text-3xl m-1 font-semibold">{project.title}</h2>
                            {project.tagline && <p className="text-white">{project.tagline}</p>}
                            <p className="mt-3 text-white text-md">{project.description}</p>
                            <div className="mt-4 flex flex-row gap-x-5">
                                <div className="flex flex-col">
                                    {project.githubLinks.map((repo) => {
                                        return <>
                                            <div className="flex flex-row items-center">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    stroke="#FF0000"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="css-i6dzq1 me-1"
                                                >
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                                <a
                                                    href={repo.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-#FF0000 hover:underline"
                                                >
                                                    {repo.disc}
                                                </a>
                                            </div>
                                        </>
                                    })}
                                </div>

                                {project.liveLink && (
                                    <div className="flex items-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            stroke="#FF0000"
                                            strokeWidth="2.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="ms-3 css-i6dzq1 me-1"
                                        >
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                            <line x1="8" y1="21" x2="16" y2="21"></line>
                                            <line x1="12" y1="17" x2="12" y2="21"></line>
                                        </svg>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-#FF0000 hover:underline"
                                        >
                                            Live
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="mt-2 m-0">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-1 mt-2 inline-block"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
