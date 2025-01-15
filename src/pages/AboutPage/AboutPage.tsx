import { useTranslation } from "react-i18next";
import H1Custom from "../../components/Titles/H1Custom"

const AboutPage = () => {
	const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center">
            <H1Custom className="text-center">{t('about.title')}</H1Custom>
        </div>
    )
}

export default AboutPage