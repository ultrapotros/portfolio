import { useTranslation } from "react-i18next";
import rockPaperScissors from '../../assets/img/rock-paper-scissors.jfif';
import calculator from '../../assets/img/calculator2.png';
import three_in_a_row from '../../assets/img/three_in_a_row.png';
import './projects.css';

export const Projects = () => {
	const [t] = useTranslation("global");
	return (
		<>
			<h3>{t('projects.title')}</h3>
			<div className="projects-container">
				<div className="projects">
					<a href='https://ultrapotros.github.io/Rock-Paper-Scissors/' target="_blank" rel="noreferrer">
						<img className='project-img' src={rockPaperScissors} alt='game drawing' />
					</a>
				</div>
				<div className="projects">
					<a href="https://ultrapotros.github.io/Calculator/" target="_blank" rel="noreferrer">
						<img className='project-img' src={calculator} alt='calculator drawing' />
					</a>
				</div>
				<div className="projects">
					<a href="https://ultrapotros.github.io/three_in_a_row/" target="_blank" rel="noreferrer">
						<img className='project-img' src={three_in_a_row} alt='three in a row drawing' />
					</a>
				</div>
			</div>
		</>
	)
}
