import '../styles/components/EducationCard.scss'
import { ReactComponent as ISCTEIcon } from '../assets/svgs/iscte.svg'
import { ReactComponent as AaltoIcon } from '../assets/svgs/aalto.svg'
import { ReactComponent as ISTIcon } from '../assets/svgs/ist.svg'

type EducationCardProps = {
    id: number
    universityName: string,
    location: string,
    degree: string,
    specialization: string,
    thesisGrade: string,
    finalGrade: string,
    from: string,
    to: string,
    logo: string,
}

export function EducationCard(
    {
        id,
        universityName,
        location,
        degree,
        specialization,
        thesisGrade,
        finalGrade,
        from,
        to,
        logo,
    }: EducationCardProps) {

    function mapSVG(logo: string){
        switch(logo){
            case "iscte":
                return <ISCTEIcon/>
            case "aalto":
                return <AaltoIcon/>
            case "ist":
                return <ISTIcon/>
            default:
                return <ISCTEIcon fill="transparent"/>
        }
    }

    const isGradeSet = (grade: string) => {
        if(grade !== 'Not applicable')
            return 'contrast'
        else return ''
    }

    console.log(id)
    return (
        <article className={`education ${id % 2 === 0 ? 'card--fromRight' : 'card--fromLeft'}`}>
            <div className='education__icon'>
                {mapSVG(logo)}
            </div>

            <div className='education__info'>
                <h2 className='name'>{universityName}</h2>
                <p className='location'>{location}</p>
                <br/>
                <h2 className='degree'>{degree}</h2>
                <p className='specialization'>{specialization}</p>
                <br/>
                <h2 className='title'>Grades</h2>
                <p className='grade'>Thesis:
                    <span className={`${isGradeSet(thesisGrade)}`}>
                        {' ' + thesisGrade}
                    </span>
                </p>
                <p className='grade'>Final:
                    <span className={`${isGradeSet(finalGrade)}`}>
                        {' ' + finalGrade}
                    </span>
                </p>
            </div>

            <div className='education__dates'>
                <p>{from} - {to}</p>
            </div>
        </article>
    );
}
