"use client"
import React, {useState} from "react";

type SkillsProps = {
    data: {
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

const Skills = ({data}: SkillsProps) => {
    const [activeTab, setActiveTab] = useState("soft");

    const setBg = (active: string) => {return activeTab === active ? "bg-yellow" : "bg-grey"}

    const setTabsAlignment = (tab: string) => {return tab === "soft" ? "text-left rounded-l-md" : "text-right rounded-r-md"}



    const tabs = (<div className="flex">
    {["soft", "hard"].map(el => ( 
    <button 
    key={el}
    type="button" 
    className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
    onClick={() => setActiveTab(el)} 
    > 
        {el + " "} Skills
        </button>))}
</div>)



    const content = (
        <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
            activeTab === "soft" ? "justify-start" : "justify-end"}`}>
        {data[activeTab].map(({icon, text}: {icon: string, text: string}) => (
            <li key={text} className="skill">
                <span>{icon}</span>{text}
            </li> 
         ))} 
    </ul>
    );

    return (
        <div>
                {tabs}
                {content}
        </div>
        
    )
}

export default Skills;