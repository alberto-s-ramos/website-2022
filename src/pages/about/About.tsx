import './About.scss'
import { motion } from 'framer-motion'
import { chatMessages } from "./data/chatMessages"
import { hobbiesData, hobbiesDataProps } from "./data/hobbiesData"
import { HobbyCard } from "../../components/cards/hobbyCard/HobbyCard";
import { useTheme } from "../../context/ThemeContext";
import React, {useEffect, useState} from "react";
import {generateKey} from "../../utils/app.utils";

export function About() {
    const [messages, setMessages] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const { getTheme } = useTheme();
    const today = new Date();

    useEffect(() => {
        // @ts-ignore
        setMessages(chatMessages.map((msg, index) => {
            const timeToArrive = (index+1) * 700 ;
            return (
                <motion.article
                    className={`chat__bubble`}
                    key={generateKey()}
                    initial={{ left: `-${timeToArrive}` }}
                    whileInView={{ left: '0px' }}
                    viewport={{ once: true }}>
                    <h4>{msg.text}</h4>
                </motion.article>
            )
        }))
        // @ts-ignore
        setHobbies(hobbiesData.map((hobby: hobbiesDataProps, index) =>
            <li key={generateKey()}>
                <HobbyCard
                    key={'hobby-'+index}
                    id={hobby.id}
                    title={hobby.title}
                    description={hobby.description}
                    imgUrl={hobby.imgUrl}
                />
            </li>
        ))
    }, []);

    const videoComponent = getTheme() === 'light' ? (
        <React.Fragment key={`video_${getTheme()}`}>
            <video
                className='about__emoji-video'
                autoPlay loop muted playsInline preload='auto'>
                <source src='/assets/emoji_light.mp4' type="video/mp4" />
            </video>
        </React.Fragment>
    ) : (
        <React.Fragment key={`video_${getTheme()}`}>
            <video
                className='about__emoji-video'
                autoPlay loop muted playsInline preload='auto'>
                <source src='/assets/emoji_dark.mp4' type="video/mp4" />
            </video>
        </React.Fragment>
    )

    const hour = `${today.getHours()}:${today.getMinutes() > 10 ? today.getMinutes() : '0'+today.getMinutes()}`

    return(
        <section id="about" className='about'>
            <div className='about__intro'>
                <motion.div
                    initial={{ scale: 0.75 }}
                    whileInView={{ scale: 1  }}
                    viewport={{ once: true }}>
                    {videoComponent}
                </motion.div>
                <div className="chat">
                    <div className="chat-wrapper">
                        <span className="chat__date">Today {hour}</span>
                        {messages}
                    </div>
                </div>
            </div>

            <div className='about__hobby-section'>
                <motion.h1
                    className='title'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    viewport={{ once: true }}>
                    Hobbies
                </motion.h1>
                <div className='hobbies'>
                    {hobbies}
                </div>
            </div>


        </section>
    )
}