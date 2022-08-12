import { ProfExperienceCard } from "../components/ProfExperienceCard";
import { profExperienceData, educationData } from '../data/experienceData'
import '../styles/Experience.scss'
import { useEffect } from "react";
import { EducationCard } from "../components/EducationCard";

export function Experience() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const experienceCards = profExperienceData.map((element, index) =>
        <ProfExperienceCard
            key={index}
            id={element.id}
            companyName={element.companyName}
            location={element.location}
            title={element.title}
            description={element.description}
            technologies={element.technologies}
            from={element.from}
            to={element.to}
            logo={element.logo}/>
    )

    const educationCards = educationData.map((element, index) =>
        <EducationCard
            key={index}
            id={element.id}
            universityName={element.universityName}
            location={element.location}
            degree={element.degree}
            specialization={element.specialization}
            thesisGrade={element.thesisGrade}
            finalGrade={element.finalGrade}
            from={element.from}
            to={element.to}
            logo={element.logo}
        />
    )


    return(
        <section className='experience'>
            <div className='experience__title'>
                <h2 className='highlighted'>Professional</h2> <br/>
                <h1 className='highlighted'>Experience</h1>
            </div>
            <div className='experience__cards'>
                {experienceCards}
            </div>

            <div className='experience__title'>
                <h1 className='highlighted'>Education</h1>
            </div>

            <div className='experience__cards'>
                {educationCards}
            </div>
        </section>
    )
}