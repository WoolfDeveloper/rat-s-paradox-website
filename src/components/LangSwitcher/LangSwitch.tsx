
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className='flex flex-row gap-4'>
      <button className='text-md font-jetbrains-m ' onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button className='text-md font-jetbrains-m ' onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;