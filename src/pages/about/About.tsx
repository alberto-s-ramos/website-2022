import './About.scss'
import { motion } from 'framer-motion'
import { chatMessages } from "./data/chatMessages"
import { hobbiesData, hobbiesDataProps } from "./data/hobbiesData"
import { HobbyCard } from "../../components/cards/hobbyCard/HobbyCard";
import { useTheme } from "../../context/ThemeContext";
import React, { useEffect } from "react";

export function About() {
    const { getTheme } = useTheme();
    const today = new Date();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const messages = chatMessages.map((msg, index) => {
        const timeToArrive = msg.id * 1000 > 3000 ? 3000 : msg.id * 1000;
        return (
                <article
                    className={`chat__bubble chat__bubble--${timeToArrive}`}
                    key={'chat_bubble-'+index}>
                    <h4>{msg.text}</h4>
                </article>
        )
    })

    const hobbies = hobbiesData.map((hobby: hobbiesDataProps, index) => (
            <HobbyCard
                key={'hobby-'+index}
                id={hobby.id}
                title={hobby.title}
                description={hobby.description}
                imgUrl={hobby.imgUrl}
            />
        )
    )

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

            {/*<div className='about__hobby-section'>*/}
            {/*    <h1>Hobbies</h1> <br/>*/}
            {/*</div>*/}

            {/*<div className='about__hobbies'>*/}
            {/*    {hobbies}*/}
            {/*</div>*/}
        </section>
    )
}