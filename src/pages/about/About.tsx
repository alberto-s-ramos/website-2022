import React, { ReactElement, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { chatMessages } from "./data/chatMessages"
import { hobbiesData, hobbiesDataProps } from "./data/hobbiesData"
import { HobbyCard } from "../../components/cards/hobbyCard/HobbyCard";
import { useTheme } from "../../context/ThemeContext";
import { generateKey } from "../../utils/app.utils";
import './About.scss'

export function About() {
    const [messages, setMessages] = useState<ReactElement[]>([]);
    const [hobbies, setHobbies] = useState<ReactElement[]>([]);
    const [currentHour, setCurrentHour] = useState<string>();
    const { getTheme } = useTheme();
    const today = new Date();

    useEffect(() => {
        setMessages(chatMessages.map((msg, index) => {
            const timeToArrive = (index+1) * 700;
            return (
                <li key={generateKey()}>
                    <motion.article
                        className={`chat__bubble`}
                        initial={{ left: `-${timeToArrive}` }}
                        animate={{ left: '0px' }}
                        viewport={{ once: true }}>
                        <h4>{msg.text}</h4>
                    </motion.article>
                </li>
            )
        }))

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

        setCurrentHour(`${today.getHours()}:${today.getMinutes() > 10 ? today.getMinutes() : '0'+today.getMinutes()}`)
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
                        <span className="chat__date">Today {currentHour}</span>
                        <ul>
                            {messages}
                        </ul>
                    </div>
                </div>
            </div>

            <section className='about__hobby-section'>
                <motion.h1
                    className='title'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1  }}
                    viewport={{ once: true }}>
                    Hobbies
                </motion.h1>
                <ul className='hobbies'>
                    {hobbies}
                </ul>
            </section>
        </section>
    )
}