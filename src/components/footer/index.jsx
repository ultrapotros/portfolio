import { useTranslation } from "react-i18next";
import React from 'react'
import './footer.css';
import linkLogo from '../../assets/img/linkedin-icon-logo-black-and-white.png';
import gitLogo from '../../assets/img/github-mark-white.png';
export const Footer = () => {
    const [t] = useTranslation("global");
    return (
        <>
            <div className="footer-container">
                <p>Santi Mezquita, {t('footer.charge')}</p>
                <nav className="footer-nav">
                    <a href="https://www.linkedin.com/in/santiagomezquitafernandez/" target="_blank" rel="noopener noreferrer">
                        <img src={linkLogo} alt="LinkedIn logo" />
                    </a>
                    <a href="https://github.com/ultrapotros" target="_blank" rel="noopener noreferrer">
                        <img src={gitLogo} alt="Git Hub logo" />
                    </a>
                </nav>
            </div>
        </>
    )
}
