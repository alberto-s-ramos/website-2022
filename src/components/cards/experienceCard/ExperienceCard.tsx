import './ExperienceCard.scss'
import { motion } from 'framer-motion'
import {
    isGradeSet,
    isPresentDate,
    mapSVG
} from "./ExperienceCard.utils";
import {generateKey} from "../../../utils/app.utils";
import React, {useEffect, useState} from "react";
import {SkillCard} from "../skillCard/SkillCard";

type Project = {
    title:string
    description:string
}

type Grade = {
    type:string
    value:string
}

type Date = {
    from:string
    to:string
}

type ExperienceCardProps = {
    icon: string,
    institution: string,
    dates: Date,
    color: string,
    location: string,
    title: string,
    description?: string[],
    grades?: Array<Grade>,
    technologies?: Array<String>,
    skills?: Array<{ name:string, icon:string }>,
}

export function ExperienceCard (
    {
        icon,
        dates,
        color,
        institution,
        location,
        title,
        description,
        grades,
        technologies,
        skills
    }: ExperienceCardProps) {
    return (
        <motion.article
            className='experience-card'
            initial={{ left: '-50px' }}
            whileInView={{ left: '0px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.02 }}
            viewport={{ once: true }}>
            <div className='experience-card__header' style={{backgroundColor: color}}>
                <div className='experience-card__header--icon'>
                    {mapSVG(icon)}
                </div>
            </div>

            <motion.div
                className='experience-card__info'
                initial={{ left: '-250px' }}
                whileInView={{ left: '0px' }}
                viewport={{ once: true }}>
                <h2 className='institution'>{institution}</h2>
                <h4 className='title'>{title}</h4>
                <p className='location'>{location}</p>
                <div className='dates'>
                    <p>{dates.from} -
                        <span className={`${isPresentDate(dates.to)}`}>
                        {' ' + dates.to}
                    </span>
                    </p>
                </div>
                { description && description.map(el =>
                    <div className='description'>
                        <p>{el}</p>
                    </div>)
                }
                { grades &&
                    <div className='grades'>
                        { grades.map((grade) =>
                            <p className='experience-card-grade' key={generateKey()}>
                                {grade.type}: <span className={`${isGradeSet(grade.value)}`}>{' ' + grade.value}</span>
                            </p>
                        )}
                    </div>
                }
                {
                    skills &&
                    <div className='skills'>
                        { skills.map((skill) =>
                                <SkillCard
                                    key={generateKey()}
                                    name={skill.name}
                                    icon={skill.icon}/>
                        )}
                    </div>
                }
                { technologies &&
                    <div className='technologies'>
                        { technologies.map((name) =>
                            <p className='technology' key={generateKey()}>
                                {name}
                            </p>
                        )}
                    </div>
                }
            </motion.div>
        </motion.article>
    );
}