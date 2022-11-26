import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useTheme } from "../../context/ThemeContext";

export function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const {getTheme, toggleTheme} = useTheme();

    return (
        <nav className='navbar'>
            <ul className={`navbar__links ${isNavExpanded ? 'expanded' : ''}`}>
                <li key='nav-link-1'>
                    <NavLink className={({ isActive }) =>  isActive ? 'navbar__item selected' : 'navbar__item' }
                             to="/"
                             onClick={() => setIsNavExpanded(false)}
                    >
                        About
                    </NavLink>
                </li>
                <li key='nav-link-2'>
                    <NavLink className={({ isActive }) =>  isActive ? 'navbar__item selected' : 'navbar__item' }
                             to="/experience"
                             onClick={() => setIsNavExpanded(false)}
                    >
                        Experience
                    </NavLink>
                </li>
               <li key='nav-link-3'>
                   <NavLink className={({ isActive }) =>  isActive ? 'navbar__item selected' : 'navbar__item' }
                            to="/projects"
                            onClick={() => setIsNavExpanded(false)}
                   >
                       Projects
                   </NavLink>
               </li>
               <li key='nav-link-4'>
                   <NavLink className={({ isActive }) =>  isActive ? 'navbar__item selected' : 'navbar__item' }
                            to="/contact"
                            onClick={() => setIsNavExpanded(false)}
                   >
                       Contact
                   </NavLink>
               </li>
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