"use client";
import React, {useState} from "react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("soft");

    const setBg = (active: string) => {return activeTab === active ? "bg-yellow" : "bg-grey"}
    return (
        <div className="flex">
            {["soft", "hard"].map(el => ( 
            <button 
            key={el}
            type="button" 
            onClick={() => setActiveTab(el)} 
            className={"btn " + setBg(el)}> 
                {el + " "} Skills
                </button>))}
        </div>
    )
}

export default Skills;