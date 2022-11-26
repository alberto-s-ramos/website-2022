import './ExperienceCard.scss'
import { motion } from 'framer-motion'
import {
    isGradeSet,
    isPresentDate,
    mapSVG
} from "./ExperienceCard.utils";
import {generateKey} from "../../../utils/app.utils";

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
    location: string,
    title: string,
    description?: string,
    projects?: Array<Project>,
    grades?: Array<Grade>,
    technologies?: Array<String>,
}

export function ExperienceCard (
    {
        icon,
        dates,
        institution,
        location,
        title,
        description,
        projects,
        grades,
        technologies,
    }: ExperienceCardProps) {


    return (
        <motion.article
            className='experience-card'
            initial={{ scale: 0.85 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}>
            <div className='experience-card__icon'>
                {mapSVG(icon)}
            </div>

            <div className='experience-card__dates'>
                <p>{dates.from} -
                    <span className={`${isPresentDate(dates.to)}`}>
                        {' ' + dates.to}
                    </span>
                </p>
            </div>

            <div className='experience-card__header'>
                <h2 className='institution highlighted'>{institution}</h2>
                <p className='location'>{location}</p>
            </div>

            <div className='experience-card__description'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
            </div>

            { projects &&
                <div className='experience-card__projects'>
                    { projects.map((project) =>
                        <div className='experience-card-project' key={generateKey()}>
                            <p className='experience-card-project__title'><b>{project.title}</b></p>
                            <p className='experience-card-project__description'>{project.description}</p>
                        </div>
                    )}
                </div>
            }

            { grades &&
                <div className='experience-card__grades'>
                    { grades.map((grade) =>
                        <p className='experience-card-grade' key={generateKey()}>
                            {grade.type}: <span className={`${isGradeSet(grade.value)}`}>{' ' + grade.value}</span>
                        </p>
                    )}
                </div>
            }

            { technologies &&
                <>
                    <div className='experience-card__description'>
                        <h4 className='title'>Tech stack</h4>
                    </div>
                    <div className='experience-card__technologies'>
                        { technologies.map((name) =>
                            <p className='experience-card-technology' key={generateKey()}>{name}</p>
                        )}
                    </div>
                </>
            }

        </motion.article>
    );
}