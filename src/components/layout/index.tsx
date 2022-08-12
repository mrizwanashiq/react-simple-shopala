import { FC, useState } from "react"
import { Layout, Menu, Avatar } from "antd"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import UserSelected from "assets/icons/UserSelected"
import UserNonSelected from "assets/icons/UserNonSelected"
import ProductIcon from "assets/icons/ProductsLogo"
import ProductIconActive from "assets/icons/ProductLogoActive"
import CampaignIcon from "assets/icons/CampaignIcon"
import SettingOn from "assets/icons/SettingOn"
import SettingOff from "assets/icons/SettingOff"
import CampaignIconActive from "assets/icons/CampaignIconActive"
import { getGoBack, getPageTitle, userProfile } from "redux/app"
import { LayoutWrapper, Profile, Info } from "./style"
import { UserOutlined } from "@ant-design/icons"

import theme from "styles/Theme"

const { Content, Sider } = Layout

const CustomLayout: FC = ({ children }) => {
	const pageTitle = useSelector(getPageTitle)
	const token = localStorage.getItem("token")
	const goBack = useSelector(getGoBack)
	const userProfileData = useSelector(userProfile)
	const [collapsed, setCollapsed] = useState(false)
	let selectedMenuLS = localStorage.getItem("selectedMenu")
	const [selectedMenu, setSelectedMenu] = useState<string | null>(
		selectedMenuLS ? selectedMenuLS : "1"
	)

	const { push: redirectTo, goBack: goBackHistory } = useHistory()

	console.log(selectedMenu)
	console.log(selectedMenuLS)

	return (
		<LayoutWrapper collapsed={collapsed}>
			<Layout
				style={{
					background: theme.colors.background,
					height: "100%",

					display: token ? "flex" : "none",
				}}
			>
				<Sider
					collapsible
					width={321}
					collapsed={collapsed}
					onCollapse={c => setCollapsed(c)}
					className="custom-sider"
					theme="light"
					style={{
						overflow: "auto",
						height: "100vh",
						position: "fixed",
						left: 0,
						background: "#b5ecff",
					}}
				>
					<Profile collapsed={collapsed}>
						<Avatar size={!collapsed ? 130 : 43} icon={<UserOutlined />}></Avatar>
						<Info collapsed={collapsed}>
							<h2>{userProfileData && userProfileData.personal_name}</h2>
							<p> {userProfileData && userProfileData.role}</p>
						</Info>
					</Profile>
					{userProfileData && (
						<Menu
							mode="inline"
							defaultSelectedKeys={selectedMenuLS ? [selectedMenuLS] : ["1"]}
							theme="light"
							style={{
								border: "none",
								overflowX: "hidden",
								userSelect: "none",
								background: "#b5ecff",
							}}
						>
							{userProfileData.role === "admin" && (
								<Menu.Item
									onClick={() => {
										setSelectedMenu("1")
										redirectTo("/")
										localStorage.setItem("selectedMenu", "1")
									}}
									key="1"
									icon={
										selectedMenu === "1" || selectedMenuLS == "1" ? (
											<UserSelected />
										) : (
											<UserNonSelected />
										)
									}
								>
									Vendors
								</Menu.Item>
							)}

							<Menu.Item
								onClick={() => {
									redirectTo("/products")
									setSelectedMenu(userProfileData.role === "vendor" ? "1" : "2")
									localStorage.setItem(
										"selectedMenu",
										userProfileData.role === "vendor" ? "1" : "2"
									)
								}}
								key={userProfileData.role === "vendor" ? "1" : "2"}
								icon={
									(userProfileData.role === "admin" && selectedMenu === "2") ||
									(userProfileData.role === "admin" && selectedMenuLS === "2") ||
									(userProfileData.role === "vendor" && selectedMenu === "1") ||
									(userProfileData.role === "vendor" && selectedMenuLS === "1") ? (
										<ProductIconActive />
									) : (
										<ProductIcon />
									)
								}
							>
								Products
							</Menu.Item>
							<Menu.Item
								onClick={() => {
									redirectTo("/vendors")
									setSelectedMenu("3")
									localStorage.setItem("selectedMenu", "3")
								}}
								key="3"
								icon={
									selectedMenu === "3" || selectedMenuLS === "3" ? (
										<CampaignIcon />
									) : (
										<CampaignIconActive />
									)
								}
							>
								Vendors
							</Menu.Item>
							<Menu.Item
								onClick={() => {
									redirectTo("/settings")
									setSelectedMenu("4")
									localStorage.setItem("selectedMenu", "4")
								}}
								key="4"
								icon={
									selectedMenu === "4" || selectedMenuLS == "4" ? <SettingOn /> : <SettingOff />
								}
							>
								Settings
							</Menu.Item>
						</Menu>
					)}
				</Sider>
				<Layout
					className="site-layout"
					style={{
						transition: "0.15s ease all",
						marginLeft: collapsed ? 79 : 230,
						height: "100%",
						background: theme.colors.background,
					}}
				>
					<Content>{children}</Content>
				</Layout>
			</Layout>
		</LayoutWrapper>
	)
}

export default CustomLayout
