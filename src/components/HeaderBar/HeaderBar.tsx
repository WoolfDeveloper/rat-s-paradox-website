import { useState } from "react"
import LanguageSwitcher from "../LangSwitcher/LangSwitch"
import HeaderLink from "../Links/HeaderLink"
import { headerLinks } from "../../constants/links/links"
import { useTranslation } from "react-i18next"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

const HeaderBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
    const { t } = useTranslation()

    const enabledLinks = headerLinks.filter(link => link.enabled)
    const visibleLinks = enabledLinks.slice(0, 4)
    const moreLinks = enabledLinks.slice(4)
    const hasMoreLinks = moreLinks.length > 0

    return (
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background dark:bg-background-dark text-black dark:text-white border-b-4 border-b-primary dark:border-b-primary-dark">
            <div className="font-doodly text-[1rem] uppercase">Rat's Paradox</div>
            
            <nav className="hidden md:flex flex-row items-center gap-4">
                <ThemeToggle />
                {visibleLinks.map((link, index) => (
                    <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                ))}
                
                {hasMoreLinks && (
                    <div className="relative">
                        <button 
                            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                            className="flex items-center gap-1"
                        >
                            <div className="relative text-[1rem]">
                                <span className={`absolute transition-opacity duration-300 ${isMoreMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    [-]
                                </span>
                                <span className={`transition-opacity duration-300 ${isMoreMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                                    [+]
                                </span>
                            </div>
                        </button>
                        
                        <div className={`absolute top-full right-0 z-20
                            transform transition-all duration-300 ease-in-out
                            ${isMoreMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'}
                        `}>
                            <nav className="flex flex-col items-end gap-1 p-4 bg-background dark:bg-background-dark shadow-lg">
                                {moreLinks.map((link, index) => (
                                    <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
                <LanguageSwitcher />
            </nav>

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

            <div className={`md:hidden absolute top-[76px] right-0 left-0 z-10
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}>
                <div className="flex justify-end">
                    <nav className="inline-flex flex-col items-end justify-center gap-1 p-4 ml-auto bg-background dark:bg-background-dark">
                        {enabledLinks.map((link, index) => (
                            <HeaderLink href={link.path} key={index}>{t(`navMenu.${link.name}`)}</HeaderLink>
                        ))}
                        <LanguageSwitcher />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar