import React, {useEffect, useState} from "react";
import { useTheme } from "../context/ThemeContext";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { About } from "../pages/about/About";
import { Experience } from "../pages/experience/Experience";
import { Projects } from "../pages/projects/Projects";
import { Contact } from "../pages/contact/Contact";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

import './App.scss'

type CurrentSectionProps = {
    id: string;
}

function App() {
    const { getTheme } = useTheme();
    const [currentSection, setCurrentSection] = useState<string>('');
    const sections = [
        { id: "about", title: "About" },
        { id: "experience", title: "Experience" },
        { id: "education", title: "Education" },
        { id: "projects", title: "Projects" },
    ];

    useEffect(() => {
        if (getTheme() === 'dark') {
            document.body.style.backgroundColor = '#302d33';
        } else {
            document.body.style.backgroundColor = '#FFFF';
        }
    }, [getTheme()]);

    useEffect(() => {
        setCurrentSection(sections[0].id);
    }, []);

    return (
        <div className="app__container" id={getTheme()}>
        <Router>
            <Navbar
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
            <main className='app' >
                  {/*<Routes>*/}
                  {/*    <Route path="/" element={<About/>} />*/}
                  {/*    <Route path="/experience" element={<Experience/>} />*/}
                  {/*    <Route path="/projects" element={<Projects/>} />*/}
                  {/*    <Route path="/Contact" element={<Contact/>} />*/}
                  {/*</Routes>*/}
                    <About/>
                    <Experience/>
                    {/*<Projects/>*/}
                    {/*<Contact/>*/}
            </main>
            <Footer/>
        </Router>
        </div>
    )
}

export default App