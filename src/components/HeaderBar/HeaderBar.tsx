import { useState } from "react"
import LanguageSwitcher from "../LangSwitcher/LangSwitch"
import HeaderLink from "../Links/HeaderLink"
import { headerLinks } from "../../constants/links/links"
import { useTranslation } from "react-i18next"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

const HeaderBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background dark:bg-background-dark text-black dark:text-white border-b-4 border-b-primary dark:border-b-primary-dark">
            <div className="font-doodly text-[1rem] uppercase">Rat's Paradox</div>
            
            <div className="hidden md:flex flex-row items-center gap-4">
                <ThemeToggle />
                {headerLinks.map((link, index) => link.enabled && (
                    <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                ))}
                <LanguageSwitcher />
            </div>

            <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={`md:hidden absolute top-16 right-0 left-0 z-10
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}>
                <div className="flex flex-col items-end justify-center gap-1 p-4">
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