import { StaticImageData } from "next/image";


interface Project {
    title: string,
    tagline: string | null,
    description: string,
    images: StaticImageData[] | null,
    githubLinks: Array<{ link: string, disc: string }>,
    liveLink: string | null,
    tags: string[]
}
const Projects: Project[] = [
    {
        title: "Massenger",
        tagline: "Android chat application",
        description: "Massenger is real time chat application for android and web users, we can text chat with smooth seamless experience",
        images: null,
        githubLinks: [{ link: "https://github.com/ManavJoshi111/stock_project_frontend", disc: "Massenger android source code" }, { link: "", disc: "nodejs socket server code" }, { link: "", disc: "Massenger React website code" }],
        liveLink: "https://aarjupatel.tech",
        tags: [
            "java",
            "Kotlin",
            "React Js",
            "NodeJs",
            "Socket.IO"
        ]
    },
];

export default Projects;