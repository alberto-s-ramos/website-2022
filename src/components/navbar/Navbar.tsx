import React, { useState} from "react";
import "./Navbar.scss";
import { animateScroll } from "react-scroll";

import { useTheme } from "../../context/ThemeContext";
import { generateKey } from "../../utils/app.utils";

type NavbarProps = {
    sections: { id: string; title: string }[];
    currentSection: string;
    setCurrentSection: (sectionId: string) => void;
}

export function Navbar(props:NavbarProps) {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const { getTheme, toggleTheme } = useTheme();
    const { sections, currentSection, setCurrentSection } = props;

    const handleNavClick = (sectionId:string) => {
        setCurrentSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView(
                { behavior: "smooth" }
            );
        }
    };

    const navLinks= sections.map(section =>
        <li key={generateKey()}>
            <a
                className={currentSection === section.id ? 'navbar__item selected' : 'navbar__item'}
                href={`#${section.id}`}
                onClick={() => handleNavClick(section.id)}>
                {section.title}
            </a>
        </li>
);


    return (
        <nav className='navbar'>
            <ul className={`navbar__links ${isNavExpanded ? 'expanded' : ''}`}>
                <>{navLinks}</>
            </ul>
            <button
                className={`navbar__hamburger ${isNavExpanded ? 'expanded' : ''}`}
                aria-label='hamburger menu'
                onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <label className='navbar__theme-switch'>
                <input type="checkbox" aria-label='toggle theme' onClick={toggleTheme} defaultChecked={getTheme() === 'dark'}/>
                <span className="slider round"></span>
            </label>
        </nav>
    );
}