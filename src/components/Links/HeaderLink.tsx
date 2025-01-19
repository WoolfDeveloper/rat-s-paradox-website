import { useNavigate } from "react-router-dom";

const HeaderLink = ({ children, href, external = false, className }: { children: React.ReactNode, href: string, external?: boolean, className?: string }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (external) {
			window.open(href, '_blank')
		} else {
			navigate(href)
		}
	}

	return (
		<a className={`text-black dark:text-white cursor-pointer transition-all duration-100 ease-in-out hover:text-primary dark:hover:text-primary-dark font-primary text-md ${className}`}
			onClick={handleClick}
		>
			{children}
		</a>
	)
}

export default HeaderLink