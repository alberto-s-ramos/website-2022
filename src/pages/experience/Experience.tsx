import { profExperienceData, educationData } from './data/experienceData'
import { motion } from 'framer-motion'
import { ReactElement, useEffect, useState} from "react";
import { ExperienceCard } from "../../components/cards/experienceCard/ExperienceCard";
import { generateKey } from "../../utils/app.utils";
import './Experience.scss'

export function Experience(): ReactElement {
    const [experienceCards, setExperienceCards] = useState<ReactElement[]>([]);
    const [educationCards, setEducationCards] = useState<ReactElement[]>([]);

    useEffect(() => {
        setExperienceCards(profExperienceData.map((element) =>
            <li key={generateKey()}>
                <ExperienceCard
                    icon={element.icon}
                    dates={element.dates}
                    color={element.color}
                    institution={element.institution}
                    location={element.location}
                    title={element.title}
                    description={element.description}
                />
            </li>
        ))

        setEducationCards(educationData.map((element) =>
            <li key={generateKey()}>
                <ExperienceCard
                    icon={element.icon}
                    dates={element.dates}
                    color={element.color}
                    institution={element.institution}
                    location={element.location}
                    title={element.title}
                    description={element.description}
                    grades={element.grades}/>
            </li>
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
                <ul className='experience__cards'>
                    {experienceCards}
                </ul>

            </section>
            <section id="education" className='experience'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    viewport={{ once: true }}>
                    Education
                </motion.h1>
                <ul className='experience__cards'>
                    {educationCards}
                </ul>
            </section>
        </>
    )
}