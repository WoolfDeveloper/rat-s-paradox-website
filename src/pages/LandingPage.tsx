import { useTranslation } from 'react-i18next';


const LandingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('landing.title')}</h1>
    </div>
  )
}

export default LandingPage