import React, {useId} from "react";
import Skills from "./Skills";

const AboutMe = ({data} : {data: any}) => {
    const{title, body} = data;
    const id = useId()

    return (<section>
        <h2 className="mb-8">{title}</h2>
        {body?.map((el: string, i: number) => (
        <p key={"${id}_${i}"} className="mb-6">
            {el}
            </p>))}
        <Skills />
    </section>)
}

export default AboutMe;