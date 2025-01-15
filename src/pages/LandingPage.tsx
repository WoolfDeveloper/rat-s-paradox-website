import { useTranslation } from 'react-i18next';
import H1Custom from '../components/Titles/H1Custom';


const LandingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <H1Custom>{t('landing.title')}</H1Custom>
    </div>
  )
}

export default LandingPage