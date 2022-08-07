import React, { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

import './styles/App.scss'

function App() {
    const { getTheme } = useTheme();

    useEffect(() => {
        if(getTheme() === 'dark') {
            document.body.style.backgroundColor = '#302d33';
        } else {
            document.body.style.backgroundColor = '#FFFF';
        }
    }, [getTheme()])

    return (
        <main className='app' id={getTheme()}>
            <Router>
                <Navbar/>
                <div className="app__container">
                    <Routes>
                        <Route path="/" element={<About/>} />
                        <Route path="/experience" element={<Experience/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/Contact" element={<Contact/>} />
                    </Routes>
                </div>
                <footer className='footer'>
                    © <p>{new Date().getFullYear()} Alberto Ramos</p>
                </footer>
            </Router>
        </main>
    )
}

export default App