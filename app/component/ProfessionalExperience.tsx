"use client"
import React from "react";

type professionalData = {
    data: {
    title: string;
    experiences: {
        role: string;
        description: string;
        current: boolean;
    }[];
}
}

const ProfessionalExperience = ({data}: professionalData) => {
    return (
        <section>
            <h2>{data.title}</h2>
            <div className="flex flex-col gap-6">
                {data.experiences.map(({role, description, current}: 
                {role: string, description: string, current: boolean}, index: number) => (
                    <div key={index} className="flex flex-col rounded-lg">
                        <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
                            <div className="bg-grey-light p-6 drop-shadow-md">
                                <h3>{role}</h3>
                                <p className="text-justify">{description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )   
}

export default ProfessionalExperience;