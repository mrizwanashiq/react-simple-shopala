import styled from "styled-components"
import theme from "styles/Theme"
console.log(theme)
export const LoginButton = styled.div`
	width: 485px;
	display: flex;
	justify-content: center;
	margin-top: 55px;
	margin-bottom: 12px;
	.ant-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px 40px;

		width: 130px !important;
		height: 59px !important;
		color: white !important;
		background: #188bce !important;
		border-radius: 10px !important;
	}
`

export const SubmitBtn = styled.div`
	width: 438px;
	display: flex;
	justify-content: center;
	.ant-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px 40px;

		width: 130px !important;
		height: 59px !important;
		color: white !important;
		background: #188bce !important;
		border-radius: 10px !important;
	}
`

export const ForgotPassword = styled.div`
	margin-top: 12px;
	font-family: DM Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 112.5%;
	/* identical to box height, or 15px */

	/* Gray 4 */

	color: #bdbdbd;
`
export const ActionLinks = styled.div`
	display: flex;
	flex-basis: 438px;
	justify-content: start;
`

export const LoginForm = styled.div`
	margin-left: 94px;

	.ant-input {
		width: 438px !important;
		height: 40px !important;

		border: 1px solid #8f8f8f !important;
		box-sizing: border-box !important;
		border-radius: 10px !important;
	}
`

export const FieldTitle = styled.p`
	font-family: DM Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 112.5%;
	/* identical to box height, or 18px */

	/* heading text */

	color: #333333;
	margin-top: 24px;
`

export const LoginHeading = styled.h2`
	font-family: DM Sans;
	font-style: normal;
	font-weight: 900;
	font-size: 36px;
	line-height: 112.5%;
	/* identical to box height, or 40px */

	/* heading text */

	color: #333333;
`

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
	margin-bottom: 65px;
	@media only screen and (max-width: ${theme.media.xl}) {
		margin-top: 25px;
		margin-bottom: 15px;
	}
`

export const LoginContainer = styled.div`
	width: 614px;
	padding-bottom: 25px;
	background: #ffff;
	box-shadow: -25px 77px 250px rgba(0, 0, 0, 10%);
	border-radius: 10px;

	.ant-form-item-label > label {
		font-family: DM Sans !important;
		font-style: normal !important;
		font-weight: normal !important;
		font-size: 16px !important;
		line-height: 112.5% !important;
		/* identical to box height, or 18px */

		/* heading text */

		color: #333333 !important;
	}
`
export const LoadingSpinner = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	width:40px;

`

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.ant-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px 40px;

		width: 130px !important;
		height: 59px !important;
		color: white !important;
		background: #188bce !important;
		border-radius: 10px !important;
	}

	@media only screen and (max-width: ${theme.media.xl}) {
		height: 90vh;
	}
`

export const RegisterContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.ant-form-item {
		margin-bottom: 7px;
	}
`

export const AlreadyHaveAccount = styled.div`
	text-align: center;
	padding-top: 20px;
	width: 438px;
`

export const LoginButtonWrapper = styled.div`
	margin-right: 40px;
`
