"use client"
import React, {useId} from "react";
import Skills from "./Skills";


type AboutMeProps = {
    data: {
      title: string;
      body: string[];
    };
    skills: {
      soft: {
        icon: string;
        text: string;
      }[];
      hard: {
        icon: string;
        text: string;
      }[];
    };
  };

const AboutMe = ({data, skills}: AboutMeProps) => {
    const{title, body} = data;
    const id = useId()

    return (
    <section>
        <h2 className="mb-8">{title}</h2>
        {body?.map((el: string, i: number) => (
        <p key={`${id}_${i}`} className="mb-6">
            {el}
            </p>))}
        <Skills data={skills}  />
    </section>
    )
}

export default AboutMe;