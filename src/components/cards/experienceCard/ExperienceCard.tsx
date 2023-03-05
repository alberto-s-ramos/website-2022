import React from "react";
import { motion } from 'framer-motion'
import { SkillCard } from "../skillCard/SkillCard";
import {
    isGradeSet,
    isPresentDate,
    mapSVG
} from "./ExperienceCard.utils";
import { generateKey } from "../../../utils/app.utils";
import './ExperienceCard.scss'

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
                <h3 className='title'>{title}</h3>
                <p className='location'>{location}</p>
                <div className='dates'>
                    <p>{dates.from} -
                        <span className={`${isPresentDate(dates.to)}`}>
                        {' ' + dates.to}
                    </span>
                    </p>
                </div>

                { description &&
                    <ul>
                        { description.map(el =>
                        <li key={generateKey()} className='description'>
                            <p>{el}</p>
                        </li>
                        )}
                    </ul>
                }
                { grades &&
                    <ul className='grades'>
                        { grades.map((grade) =>
                            <li key={generateKey()}>
                                <p className='experience-card-grade' key={generateKey()}>
                                    {grade.type}: <span className={`${isGradeSet(grade.value)}`}>{' ' + grade.value}</span>
                                </p>
                            </li>
                        )}
                    </ul>
                }
                { skills &&
                    <ul className='skills'>
                        { skills.map((skill) =>
                            <li key={generateKey()}>
                                <SkillCard
                                    key={generateKey()}
                                    name={skill.name}
                                    icon={skill.icon}/>
                            </li>
                        )}
                    </ul>
                }
                { technologies &&
                    <ul className='technologies'>
                        { technologies.map((name) =>
                            <li key={generateKey()}>
                                <p className='technology' key={generateKey()}>
                                    {name}
                                </p>
                            </li>
                        )}
                    </ul>
                }
            </motion.div>
        </motion.article>
    );
}