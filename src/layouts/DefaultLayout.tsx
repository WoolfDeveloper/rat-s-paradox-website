export interface DefaultLayoutProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<>
			<div className="header-container">
				<div className="header-title">Rat's Paradox</div>
			</div>
			<div className="page-content">
				{children}
			</div>
		</>
	)

}

export default DefaultLayout