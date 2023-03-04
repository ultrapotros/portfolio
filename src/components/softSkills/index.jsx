import { useTranslation } from "react-i18next";


export const SoftSkills = () => {
	const [t] = useTranslation("global");
	return (
		<div>
			<h3>{t('softSkills.title')}</h3>
			<ul>
				<li>{t('softSkills.perserverant')}</li>
				<li>{t('softSkills.teamWork')}</li>
				<li>{t('softSkills.problemSolve')}</li>
				<li>{t('softSkills.responsability')}</li>
				<li>{t('softSkills.adaptability')}</li>
				<li>{t('softSkills.empathy')}</li>
				<li>{t('softSkills.workEthic')}</li>
			</ul>
		</div>
	)
}
