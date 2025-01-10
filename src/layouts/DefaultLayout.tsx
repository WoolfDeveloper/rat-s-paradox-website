import HeaderLink from "../components/Links/HeaderLink"

export interface DefaultLayoutProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<>
			<div className="header-container">
				<div className="header-title">Rat's Paradox</div>
				<div className="flex flex-row gap-4">
					<HeaderLink href="/">Home</HeaderLink>
					<HeaderLink href="/about">About</HeaderLink>
					<HeaderLink href="/blog">Blog</HeaderLink>
				</div>
			</div>
			<div className="page-content">
				{children}
			</div>
		</>
	)

}

export default DefaultLayout