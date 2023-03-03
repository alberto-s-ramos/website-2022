import { motion } from 'framer-motion';
import './HobbyCard.scss'

type HobbyCardProps = {
    id: number,
    title: string,
    description: string,
    imgUrl: string
}

export function HobbyCard({id, title, description, imgUrl}: HobbyCardProps) {
    return (
        <motion.article
            className='hobby'
            initial={{ y: 50, opacity: 0.8, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.02 }}
            viewport={{ once: true }}>

            <div className='hobby__icon'>
                <img src={imgUrl} alt={title} loading='lazy'></img>
            </div>

            <div className='hobby__info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </motion.article>
    );
}