import LanguageSwitcher from "../LangSwitcher/LangSwitch"
import HeaderLink from "../Links/HeaderLink"
import { headerLinks } from "../../constants/links/links"


const HeaderBar = () => {
    return (
        <div className="header-container">
			<div className="header-title">Rat's Paradox</div>
				<div className="flex flex-row gap-4">
				<LanguageSwitcher />
                {headerLinks.map((link, index) => link.enabled && (
                    <HeaderLink href={link.path} key={index}>{link.name}</HeaderLink>
                ))}
			</div>
		</div>
    )
}

export default HeaderBar