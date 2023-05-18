"use client"
import React from "react"
import {aboutMe, skills, professionalData} from "../data/page-data";
import AboutMe from './component/AboutMe'
import ProfessionalExperience from "./component/ProfessionalExperience";

export default function Page() {
  return (
    <div>
        <AboutMe data={aboutMe} skills={skills} />
        <ProfessionalExperience data={professionalData}/>
    </div>
  )
}
