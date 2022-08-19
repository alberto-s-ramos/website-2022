import '../styles/components/ProjectCard.scss';
import { ReactComponent as CodesandboxIcon } from '../assets/svgs/ic-codesandbox.svg'
import { ReactComponent as GithubIcon } from '../assets/svgs/ic-github.svg'
import { motion } from 'framer-motion';

type ProjectCardProps = {
    id: number,
    imgUrl: string,
    name: string,
    description: string,
    links: ProjectLink[] | undefined
}

type ProjectLink = {
    platform: string,
    platformLink: string
}

export function ProjectCard(
    {
        id,
        imgUrl,
        name,
        description,
        links
    }: ProjectCardProps) {

    function mapSVG(logo: string){
        switch(logo){
            case "github":
                return <GithubIcon/>
            case "codesandbox":
                return <CodesandboxIcon/>
            default:
                return <GithubIcon fill="transparent"/>
        }
    }

    const platformLinks = links?.map(link =>
        <li>
            <a href={link.platformLink} aria-label={`Link to ${link.platform}`} className="social" target="_blank" rel="noopener noreferrer" >
                {mapSVG(link.platform)}
            </a>
        </li>
    )

    return(
        <article className='project'>
            <motion.img
                initial={{ opacity: 0.75, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className='project__image'
                src={imgUrl}
                alt={`${name} Header Image`}
                loading='lazy'/>
            <div className='project__info'>
                <h2 className='title'>{name}</h2>
                <p className='description'>{description}</p>
            </div>
            <ul className='project__links'>
                {platformLinks}
            </ul>
        </article>
    )
}