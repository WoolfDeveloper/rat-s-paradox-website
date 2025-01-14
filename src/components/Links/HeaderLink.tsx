import { useNavigate } from "react-router-dom";

const HeaderLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
	const navigate = useNavigate();

	return (
		<a className="text-primary cursor-pointer transition-all duration-100 ease-in-out hover:text-secondary hover:font-bold"
			onClick={() => navigate(href)}
		>
			{children}
		</a>
	)
}

export default HeaderLink