import React, { useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from '../data/projectsData'

import '../styles/Projects.scss'
import {educationData} from "../data/experienceData";
import {EducationCard} from "../components/EducationCard";

export function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = projectsData.map((element, index) =>
        <ProjectCard
            key={index}
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
                <h2 className='highlighted'><b>Personal</b></h2> <br/>
                <h1 className='highlighted'>Projects</h1>
            </div>
            <h4 className='projects__description'>A collection of small side projects I occupy my free with, to either learn new technologies or further develop existing ones.</h4>

            <div className='projects__list'>
                {projects}
            </div>

        </section>
    )
}