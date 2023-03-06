import React, {ReactElement, useEffect, useState} from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

import { useTheme } from "../../context/ThemeContext";
import { generateKey } from "../../utils/app.utils";

type NavbarProps = {
    sections: { id: string; title: string }[];
    currentSection: string;
    setCurrentSection: (sectionId: string) => void;
}

export function Navbar(props:NavbarProps) {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [navLinks, setNavLinks] = useState<ReactElement[]>([])
    const { getTheme, toggleTheme } = useTheme();
    const { sections } = props;

    useEffect(() => {
        setNavLinks(sections.map(section =>
            <li key={generateKey()}>
                <Link
                    href={`#${section.id}`}
                    className='navbar__item'
                    activeClass='selected'
                    to={`${section.id}`}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={750}>
                    {section.title}
                </Link>
            </li>
        ))
    },[]);

    return (
        <nav className='navbar'>
            <ul className={`navbar__links ${isNavExpanded ? 'expanded' : ''}`}>
                {navLinks}
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
