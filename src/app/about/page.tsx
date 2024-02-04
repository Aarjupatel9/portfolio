import Image from 'next/image';
import aarju_illustration from "../../assets/aarju_illustration.jpg";

export default function page() {
    return (
        <>
            <div className="container flex justify-start gap-5  pt-6 items-center flex-col h-screen">
                <div className=" shadow-slate-50">
                    <Image src={aarju_illustration} height={200} width={200} alt=" Illustration" />
                </div>
                <div className="mt-5 px-4">
                    <h1 className="text-4xl font-bold mb-2 text-center text-[#950740]">About Me</h1>
                    <p id="intro">
                        🙋 My name is <span className="text-[#950740] font-semibold"> Aarju Patel</span>. Currently, I am pursuing my B.Tech in <span className="text-[#950740] font-semibold">Computer Engineering</span> at Birla Vishvakarma Mahavidyalaya Engineering College, Vvnagar, Anand.
                        <br />
                        and currently working in Crest Data System (Amdavad) as software developer trainee.
                        <br />
                        🏫 I was born and raised in Morzar, Dwarka, Gujarat. I completed my 10th schooling at purusarth mahavidhyalaya, Bhanvad.
                        <br />
                        💻 I am an enthusiastic tech geek with a deep interest in backend development and problem solving. I have worked on numerous web development projects and possess good knowledge of <span className="text-[#950740] font-semibold" >HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++, Java, kotlin, Sockets </span>, and more.
                        <br />
                        📚 Besides technology, I have various other interests such as playing chess ♟️, playing cricket and volleyball, also enjoy traveling ✈️ and exploring new places.
                        <br />
                        🧘‍♂️ I am an introspective individual who cherishes solitude.
                    </p>
                </div>
            </div>
        </>
    )
}