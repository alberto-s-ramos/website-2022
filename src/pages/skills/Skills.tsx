import React, {useEffect, useState} from "react";
import './Skills.scss'
import { SkillCard } from "../../components/cards/skillCard/SkillCard";
import { skillsData } from "./data/skillsData";
import { generateKey } from "../../utils/app.utils";

export const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        // @ts-ignore
        setSkills(skillsData.map((skill) =>
            <SkillCard
                key={generateKey()}
                name={skill.name}
                icon={skill.icon}/>
        ))
    }, []);
    return (
        <section id="skills" className='skills'>
            <h1>Skills</h1>
            <div className='skill-cards'>
                {skills}
            </div>
        </section>
    );
};
