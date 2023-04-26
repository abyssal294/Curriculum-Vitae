import React from "react"
import {aboutMe, skills, professionalData} from "../data/page-data";
import AboutMe from './component/AboutMe'

export default function Page() {
  return (
    <div>
        <AboutMe data={aboutMe} />
        Professional Experience
    </div>
  )
}
