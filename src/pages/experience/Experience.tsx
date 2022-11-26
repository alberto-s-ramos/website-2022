import { profExperienceData, educationData } from './data/experienceData'
import './Experience.scss'
import { useEffect } from "react";
import { ExperienceCard } from "../../components/cards/experienceCard/ExperienceCard";
import { isPresentDate } from "../../components/cards/experienceCard/ExperienceCard.utils";
import { generateKey } from "../../utils/app.utils";

export function Experience() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const experienceCards = profExperienceData.map((element, i) =>
        <ExperienceCard
            key={generateKey()}
            icon={element.icon}
            dates={element.dates}
            institution={element.institution}
            location={element.location}
            title={element.title}
            description={element.description}
            projects={element.projects}
            technologies={element.technologies}/>
    )

    const educationCards = educationData.map((element, i) =>
        <ExperienceCard
            key={generateKey()}
            icon={element.icon}
            dates={element.dates}
            institution={element.institution}
            location={element.location}
            title={element.title}
            description={element.description}
            grades={element.grades}/>
    )

    return(
        <section className='experience'>
            <div>
                <div className='experience__title'>
                    <div className='section__two-line-title'>
                        <h2 className='highlighted'>Professional</h2> <br/>
                        <h1 className='highlighted'>Experience</h1>
                    </div>
                    <div className='dates'>
                        <p>
                            {profExperienceData[profExperienceData.length-1].dates.from} -
                            <span className={`${isPresentDate(profExperienceData[0].dates.to)}`}>
                                {' ' + profExperienceData[0].dates.to}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='experience__cards'>
                    {experienceCards}
                </div>
            </div>

            <div>
                <div className='experience__title'>
                    <h1 className='highlighted'>Education</h1>
                    <div className='dates'>
                        <p>
                            {educationData[educationData.length-1].dates.from} -
                            {' ' + educationData[0].dates.to}
                        </p>
                    </div>
                </div>

                <div className='experience__cards'>
                    {educationCards}
                </div>

            </div>
        </section>
    )
}