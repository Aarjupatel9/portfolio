import { StaticImageData } from "next/image";


interface Project {
    title: string,
    tagline: string | null,
    description: string,
    images: StaticImageData[] | null,
    githubLinks: Array<{ link: string, disc: string }> ,
    liveLink: string | null,
    tags: string[]
}
const Projects: Project[] = [
    {
        title: "AuctionNG",
        tagline: "Sports Auction Management Platform",
        description: "AuctionNG is a comprehensive online platform designed for managing sports auctions, particularly in cricket. The platform offers real-time bidding, player registration, team management, and detailed analytics. It provides a seamless experience for organizers and participants, enabling efficient auction management with live updates, bid tracking, and comprehensive reporting features.",
        images: null,
        githubLinks: [],
        liveLink: "https://auctionng.org",
        tags: [
            "React Js",
            "NodeJs",
            "ExpressJS",
            "Socket.IO",
            "Real-time Bidding",
            "mongoDB",
            "Sports Management",
            "Analytics"
        ]
    },
    {
        title: "Massenger",
        tagline: "Android chat application",
        description: "Massenger is real time chat application for android and web users, user will use app with smooth seamless experience, Android app build on kotlin, and web version of massenger is build in ReactJS, both have dedicated socket server and also socket and api server are different for faster performance and scaling.",
        images: null,
        githubLinks: [{ link: "https://github.com/Aarjupatel9/Massenger-kt.git", disc: "Massenger android source code" }, { link: "https://github.com/Aarjupatel9/server-folder-for-android.git", disc: "Servers code" }, { link: "https://github.com/Aarjupatel9/Massenger-web-frontend.git", disc: "Massenger React website code" }],
        liveLink: null,
        tags: [
            "java",
            "Kotlin",
            "Android Room",
            "Firebase push notification",
            "React Js",
            "Redux",
            "NodeJs",
            "Socket.IO",
            "mongoDB"
        ]
    },
    {
        title: "Bluetooth notification speaker",
        tagline: "Android Service Application",
        description: "Bluetooth notification speaker is android application for speaking notification details while wearing ear buds , we don;t need to pick up the phone to see incoming notification notification service will speak notification",
        images: null,
        githubLinks: [{ link: "https://github.com/Aarjupatel9/Bluetooth_notification_speaker.git", disc: "Android source code" }],
        liveLink: null,
        tags: [
            "Android",
            "Kotlin",
        ]
    },
    {
        title: "Computer Department Management System",
        tagline: "Computer department application",
        description: "Full stack application for mange the computer department, to maintain the records and data of the department ( specifically computer department of our collage )",
        images: null,
        githubLinks: [{ link: "https://github.com/Aarjupatel9/department_project.git", disc: "Full source code" }],
        liveLink: null,
        tags: [
            "React Js",
            "Redux",
            "NodeJs",
            "mongoDB"
        ]
    },
];

export default Projects;