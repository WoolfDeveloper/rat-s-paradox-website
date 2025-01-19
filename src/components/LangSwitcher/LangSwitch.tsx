import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className='flex flex-row gap-4'>
      <button className='text-md font-jetbrains-m ' onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button className='text-md font-jetbrains-m ' onClick={() => i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;