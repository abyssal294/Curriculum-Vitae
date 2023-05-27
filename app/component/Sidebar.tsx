import Image from "next/image"
import React, {useId} from "react";
import {Envelope, Twitter, Linkedin, Github} from "../../icons/index";

interface SidebarData {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
}

const Sidebar = ({ data }: { data: SidebarData}) => {
    const {name, role, education, contactLinks} = data;
    const id = useId();
    return (
    <div className="bg-black flex flex-col sm:h-screen content-between w-full h-auto  sm:justify-around sm:w-1/3 sm:fixed">
        <div className="text-white flex flex-col p-10 items-center">
            <Image
                priority
                width={300}
                height={300}
                className="rounded-full h-full mb-6"
                src="/images/prikazna.jpg"
                alt="profile picture"
            />
            <h1 className="mb-2">{name}</h1>
            <h2 className="mb-8">{role}</h2>
            {education?.map((el, index) => (
                <p className="mb-2" key={"${id}_$index}"}>{el}</p>
            ))}
            <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                <h3 className="mb-2">KONTAKTI</h3>
                <div className="flex flex-row justify-center gap-2 ">
                    <a className="contact-icons" href={contactLinks?.[0]} aria-label={"twitter link"}><Envelope className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[1]} aria-label={"linkedin link"}><Twitter className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[2]} aria-label={"twitter link"}><Linkedin className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[3]} aria-label={"github link"}><Github className={undefined} /></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sidebar