import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import { About } from "../pages/about/About";
import { Experience } from "../pages/experience/Experience";
import { Projects } from "../pages/projects/Projects";
import { Contact } from "../pages/contact/Contact";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

import './App.scss'

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
        <div className="app__container" id={getTheme()}>
        <Router>
            <Navbar/>
            <main className='app' >
                  <Routes>
                      <Route path="/" element={<About/>} />
                      <Route path="/experience" element={<Experience/>} />
                      <Route path="/projects" element={<Projects/>} />
                      <Route path="/Contact" element={<Contact/>} />
                  </Routes>
            </main>
            <Footer/>
        </Router>
        </div>
    )
}

export default App