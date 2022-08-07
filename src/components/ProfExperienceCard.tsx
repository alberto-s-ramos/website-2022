import '../styles/components/ProfExperienceCard.scss'
import { ReactComponent as TalkdeskIcon } from '../assets/svgs/talkdesk.svg'
import { ReactComponent as NetcentricIcon } from '../assets/svgs/netcentric.svg'

type ProfExperienceCardProps = {
    id: number,
    companyName: string,
    location: string,
    title: string,
    description: string,
    technologies: string,
    from: string,
    to: string,
    logo: string,
}

export function ProfExperienceCard(
    {
        id,
        companyName,
        location,
        title,
        description,
        technologies,
        from,
        to,
        logo
    }: ProfExperienceCardProps) {

    function mapSVG(logo: string){
        switch(logo){
            case "netcentric":
                return <NetcentricIcon/>
            case "talkdesk":
                return <TalkdeskIcon/>
            default:
                return <TalkdeskIcon fill="transparent"/>
        }
    }

    const isPresent = (time: string) => {
        if(time === 'Present')
            return 'contrast'
        else return ''
    }

    return (
        <article className={`prof-experience ${id % 2 === 0 ? 'card--fromRight' : 'card--fromLeft'}`}>
            <div className='prof-experience__icon'>
                {mapSVG(logo)}
            </div>

            <div className='prof-experience__info'>
                <h2 className='name'>{companyName}</h2>
                <p className='location'>{location}</p>
                <br/>
                <h2 className='title'>{title}</h2>
                <p className='description'>{description}</p>
                <br/>
                <p className='technologies'>{technologies}</p>
            </div>

            <div className='prof-experience__dates'>
                <p>{from} -
                    <span className={`${isPresent(to)}`}>
                        {' ' + to}
                    </span>
                </p>
            </div>

        </article>
    );
}