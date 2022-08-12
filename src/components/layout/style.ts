import styled from "styled-components"

export const LayoutWrapper = styled.div<{ collapsed: boolean }>`
	height: 100%;
	.custom-sider {
		border-right: 1px solid ${p => p.theme.colors.border} !important;
	}
	.ant-layout-content {
		padding: 30px !important;
		padding-top: 0 !important;
		margin-top: 71px !important;
		overflow: initial !important;
		height: 100%;
		margin-left: ${({ collapsed }) => (collapsed ? "0 !important" : "4% !important")};
		background: ${p => p.theme.colors.background} !important;
	}
	.ant-menu-title-content {
		font-size: 16px !important;
		font-weight: 500 !important;
		display: ${({ collapsed }) => (collapsed ? "none" : "block")};
	}

	.ant-menu-item > .anticon {
		font-size: 20px !important;
		margin-right: 10px;
	}

	.ant-menu.ant-menu-inline-collapsed > .ant-menu-item {
		& > .anticon {
			transform: translateY(6px) translateX(-2px);
		}
	}

	.ant-layout-sider-trigger {
		background: ${p => p.theme.colors.border};
	}

	.ant-menu-item {
		margin-bottom: 0px;
		height: 50px;
		display: flex !important;
		align-items: center !important;
		&::after {
			border-right-width: 4px;
		}
	}

	.ant-input-prefix {
		margin-right: 10px;
	}
	.ant-menu-item-selected {
		padding-left: 24px !important;
		background: #188bce !important;
		width: 321px !important;
		color: white !important;
		height: 68px !important;
		border-radius: 0px 10px 10px 0px !important;
	}

	.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
	.ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content {
		margin-left: 24px !important;
	}
`

export const HeaderWrapper = styled.div`
	padding-left: 30px;
	padding-right: 30px;
	padding-top: 5px;
	padding-bottom: 3px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${p => p.theme.colors.border};
`
export const MenuItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Profile = styled.div<{ collapsed: boolean }>`
	display: flex;
	align-items: center;
	text-align: center;
	flex-direction: column;

	justify-content: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
	transition: all 0.15s all;
	padding: ${({ collapsed }) => (collapsed ? "30px 0px" : "30px 5px 0px 24px")};

	position: relative;
	margin-bottom: ${({ collapsed }) => (collapsed ? "50px" : "95px")};
`

// export const Avatar = styled.div<{ collapsed: boolean }>`
// 	${({ collapsed }) => (collapsed ? "width: 43px;height: 43px;" : "width: 48px;height: 48px;")}
// 	background: ${p => p.theme.colors.black};
// 	border-radius: 50%;
// 	transition: all 0.15s ease;
// 	margin-right: ${({ collapsed }) => (collapsed ? "0px" : "12px")};
// `

export const Info = styled.div<{ collapsed: boolean }>`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	display: ${({ collapsed }) => (collapsed ? "none" : "block")};
	h2,
	p {
		margin: 0;
		padding: 0;
	}
	h2 {
		text-transform: capitalize;
		font-size: 15px;
		font-weight: ${p => p.theme.font.weight.semiBold};
		color: ${p => p.theme.colors.black};
	}
	p {
		color: ${p => p.theme.colors.gray8};
		font-size: 13px;
		margin-top: -2px;
	}
`