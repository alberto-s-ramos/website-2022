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
        <article className='skill-card'>
            <div className='skill-card__info'>
                <motion.img
                    src={icon}
                    alt='Waving Emoji'
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1  }}
                    viewport={{ once: true }}/>

                <p>{name}</p>
            </div>
        </article>
    );
};
