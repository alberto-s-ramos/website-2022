import '../styles/components/HobbyCard.scss'

type HobbyCardProps = {
    id: number,
    title: string,
    description: string,
    imgUrl: string
}

export function HobbyCard({id, title, description, imgUrl}: HobbyCardProps) {
    return (
        <article className='hobby'>
            <div className='hobby__icon'>
                <img src={imgUrl} alt={title} loading='lazy'></img>
            </div>

            <div className='hobby__info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </article>
    );
}