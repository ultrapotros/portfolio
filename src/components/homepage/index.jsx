import { useTranslation } from "react-i18next";

export const Home = () => {
    const [t] = useTranslation("global");

    return (
        <>
            <h3>{t('about.title')}</h3>
            <p>{t('about.content1')}</p>
            <p>{t('about.content2')}</p>
            <p>{t('about.content3')}</p>
            <p>{t('about.content4')}</p>
        </>
    )
}
