import { profExperienceData, educationData } from './data/experienceData'
import { motion } from 'framer-motion'
import './Experience.scss'
import {useEffect, useState} from "react";
import { ExperienceCard } from "../../components/cards/experienceCard/ExperienceCard";
import {isPresentDate, mapSVG} from "../../components/cards/experienceCard/ExperienceCard.utils";
import { generateKey } from "../../utils/app.utils";

export function Experience() {

    const [experienceCards, setExperienceCards] = useState([]);
    const [educationCards, setEducationCards] = useState([]);


    useEffect(() => {
        // @ts-ignore
        setExperienceCards(profExperienceData.map((element, i) =>
            <ExperienceCard
                key={generateKey()}
                icon={element.icon}
                dates={element.dates}
                color={element.color}
                institution={element.institution}
                location={element.location}
                title={element.title}
                description={element.description}
                projects={element.projects}
                technologies={element.technologies}/>
        ))
        // @ts-ignore
        setEducationCards(educationData.map((element, i) =>
            <ExperienceCard
                key={generateKey()}
                icon={element.icon}
                dates={element.dates}
                color={element.color}
                institution={element.institution}
                location={element.location}
                title={element.title}
                description={element.description}
                grades={element.grades}/>
        ))
    }, []);



    return(
        <>
            <section id="experience" className='experience'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    viewport={{ once: true }}>
                    Experience
                </motion.h1>
                <div className='experience__cards'>
                    {experienceCards}
                </div>

            </section>
            <section id="education" className='experience'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    viewport={{ once: true }}>
                    Education
                </motion.h1>
                <div className='experience__cards'>
                    {educationCards}
                </div>
            </section>
        </>

    )
}