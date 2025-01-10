const HeaderLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
	return (
		<a href={href} className="text-primary">
			{children}
		</a>
	)
}

export default HeaderLink