import React, { useEffect } from "react";
import { ProjectCard } from "../../components/cards/projectCard/ProjectCard";
import { projectsData } from './data/projectsData'
import './Projects.scss'
import {generateKey} from "../../utils/app.utils";

export function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = projectsData.map((element) =>
        <ProjectCard
            key={generateKey()}
            id={element.id}
            imgUrl={element.imgUrl}
            name={element.name}
            description={element.description}
            links={element.links}
        />
    )

    return(
        <section className='projects'>
            <div className='projects__title'>
                <h2 className='highlighted'>Personal</h2> <br/>
                <h1 className='highlighted'>Projects</h1>
            </div>
            <h4 className='projects__description'>A collection of small side projects I occupy my free with, to either learn new technologies or further develop existing ones.</h4>

            <div className='projects__list'>
                {projects}
            </div>

        </section>
    )
}