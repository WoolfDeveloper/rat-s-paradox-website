import { useState } from "react"
import LanguageSwitcher from "../LangSwitcher/LangSwitch"
import HeaderLink from "../Links/HeaderLink"
import { headerLinks } from "../../constants/links/links"
import { useTranslation } from "react-i18next"

const HeaderBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <div className="header-container">
            <div className="header-title">Rat's Paradox</div>
            
            <div className="hidden md:flex flex-row gap-4">
                {headerLinks.map((link, index) => link.enabled && (
                    <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                ))}
                <LanguageSwitcher />
            </div>

            <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className={`md:hidden absolute top-16 right-0 left-0 z-10 bg-black shadow-xl rounded-lg
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
            `}>
                <div className="flex flex-col items-center justify-center gap-1 p-4">
                    {headerLinks.map((link, index) => link.enabled && (
                        <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                    ))}
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    )
}

export default HeaderBar