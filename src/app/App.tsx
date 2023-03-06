import React, {ReactElement, useEffect, useState} from "react";
import { useTheme } from "../context/ThemeContext";
import { About } from "../pages/about/About";
import { Experience } from "../pages/experience/Experience";
import { Contact } from "../pages/contact/Contact";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { Skills } from "../pages/skills/Skills";
import './App.scss'

const sections = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
];

function App(): ReactElement {
    const { getTheme } = useTheme();
    const [currentSection, setCurrentSection] = useState<string>('');

    useEffect(() => {
        if (getTheme() === 'dark') {
            document.body.style.backgroundColor = '#302d33';
        } else {
            document.body.style.backgroundColor = '#FFFF';
        }
    }, [getTheme()]);

    return (
        <div className="app__container" id={getTheme()}>
            <Navbar
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
            <main className='app' >
                <About/>
                    <Experience/>
                    <Skills/>
                    <Contact/>
            </main>
            <Footer/>
        </div>
    )
}

export default App