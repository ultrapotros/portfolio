import './skills.css';
import { useTranslation } from "react-i18next";
import js from '../../assets/img/javascript.png';
import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import node from '../../assets/img/node.png';
import mongo from '../../assets/img/mongodb.png';
import postgres from '../../assets/img/postgres.png';
import docker from '../../assets/img/docker.png';
import typescript from '../../assets/img/typescript.png';
import react from '../../assets/img/react.png';
import reactNative from '../../assets/img/react-native-logo.jpg';

export const Skills = () => {
    const [t] = useTranslation("global");
    return (
        <>
            <div className="progress-sample">
                <p>{t('skills.experience')}</p>
                <div className="progress-bar-container">
                    <div className='progress-bar-info progress-100'>0</div><span>{t('skills.years')}</span>
                </div>
            </div>
            <div className="skills-container">
                <div className="skills">
                    <img className='logos' src={js} alt='JS logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-80'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={html} alt='HTML logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-90'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={css} alt='CSS3 logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-90'></div>
                    </div>
                </div>

                <div className="skills">
                    <img className="logos" src={node} alt='Node logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-70'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={docker} alt='Docker logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-70'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={postgres} alt='Postgresql logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-70'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={mongo} alt='MongoDB logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-60'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={typescript} alt='Typescript logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-40'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={react} alt='React logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-90'></div>
                    </div>
                </div>
                <div className="skills">
                    <img className="logos" src={reactNative} alt='React Native logo' />
                    <div className="progress-bar-container">
                        <div className='progress-bar progress-30'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
