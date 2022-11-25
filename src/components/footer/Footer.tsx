import React from "react";

export const Footer = () => {
    return (
        <footer className='footer'>
            © <p>{new Date().getFullYear()} Alberto Ramos</p>
        </footer>
    );
}