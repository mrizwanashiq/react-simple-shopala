import React from "react"
import styled from "styled-components"
import OffIcon from "assets/icons/OffIcons"
import ArrowLeft from "assets/icons/ArrowLeft"
import { useHistory } from "react-router-dom"
import { TopMenu, MenuContainer, BackArrow, TopHeading } from "./styles"
interface TopBarProps {
	title: string
	showBack: boolean
}
const TopBar: React.FC<TopBarProps> = ({ title, showBack }) => {
	let history = useHistory()
	return (
		<TopMenu>
			<div>
				<MenuContainer>
					<div>
						{showBack && (
							<BackArrow
								onClick={() => {
									history.goBack()
								}}
							>
								<ArrowLeft />
							</BackArrow>
						)}
					</div>
					<TopHeading style={showBack ? { marginLeft: 0 } : { marginLeft: 90 }}>{title}</TopHeading>
				</MenuContainer>
			</div>
			<div
				style={{ cursor: "pointer" }}
				onClick={() => {
					localStorage.removeItem("token")
					localStorage.removeItem("selectedMenu")
					window.location.replace("/login")
				}}
			>
				<OffIcon />
			</div>
		</TopMenu>
	)
}

export default TopBar
