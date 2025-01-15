import HeaderBar from "../components/HeaderBar/HeaderBar"

export interface DefaultLayoutProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<>
			<HeaderBar />
			<div className="page-content mt-4 ">
				{children}
			</div>
		</>
	)

}

export default DefaultLayout