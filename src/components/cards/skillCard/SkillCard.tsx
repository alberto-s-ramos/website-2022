import React from "react";
import './SkillCard.scss'
import {motion} from "framer-motion";

type SkillCardProps = {
    name: string;
    icon: string;
}

export const SkillCard = (props: SkillCardProps) => {
    const { name, icon } = props;
    return (
        <motion.article
            className='skill-card'
            initial={{ y: 20, opacity: 0.8, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            viewport={{ once: true }}>

            <div className='skill-card__info'>
                <motion.img
                    src={icon}
                    alt='Waving Emoji'
                    initial={{ scale: 0.75 }}
                    whileInView={{ scale: 1  }}
                    viewport={{ once: true }}/>
                <p>{name}</p>
            </div>
        </motion.article>
    );
};
