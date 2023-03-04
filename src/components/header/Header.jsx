import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import enFlag from '../../assets/img/en.jpg';
import esFlag from '../../assets/img/es.png';
import './header.css';

export const Header = () => {
    const [t, i18n] = useTranslation("global");
    const [isOpen, setIsopen] = useState(false);
    return (
        <div className="header-container">
            <div className='language-options'>
                <div className='language-buttons' onClick={() => i18n.changeLanguage('es')}><img /* width={60} height={40}  */ src={esFlag} alt="Spain flag" /></div>
                <div className='language-buttons' onClick={() => i18n.changeLanguage('en')}><img /* width={60} height={40} */ src={enFlag} alt="England flag" /></div>
            </div>
            <div className="navigation-container">
                <nav className={isOpen?"navigation navigation-showed":"navigation navigation-hidden"}>
                    <NavLink className="navigation-options" to='/'>{t('header.home')}</NavLink>
                    <NavLink className="navigation-options" to='/skills'>{t('header.skills')}</NavLink>
                    <NavLink className="navigation-options" to='/soft-skills'>{t('header.soft-skills')}</NavLink>
                    <NavLink className="navigation-options" to='/projects'>{t('header.projects')}</NavLink>
                </nav>
            </div>
            <button className={isOpen?"desplegable open":"desplegable"} onClick={()=>setIsopen(!isOpen)} >
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className="top-header">
                <h1>Santi Mezquita</h1>
                <h2>{t('header.title')}</h2>
            </div>
        </div>
    )
}
