import { motion } from 'framer-motion';
import '../styles/components/HobbyCard.scss'

type HobbyCardProps = {
    id: number,
    title: string,
    description: string,
    imgUrl: string
}

export function HobbyCard({id, title, description, imgUrl}: HobbyCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0.75, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='hobby'>

            <div className='hobby__icon'>
                <img src={imgUrl} alt={title} loading='lazy'></img>
            </div>

            <div className='hobby__info'>
                <h2><b>{title}</b></h2>
                <p>{description}</p>
            </div>
        </motion.article>
    );
}