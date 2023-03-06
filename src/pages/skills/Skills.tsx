import React, {useEffect, useState} from "react";
import './Skills.scss'
import { SkillCard } from "../../components/cards/skillCard/SkillCard";
import { skillsData } from "./data/skillsData";
import { generateKey } from "../../utils/app.utils";
import {motion} from "framer-motion";

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
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1  }}
                viewport={{ once: true }}>
                Skills
            </motion.h1>
            <div className='skill-cards'>
                {skills}
            </div>
        </section>
    );
};
