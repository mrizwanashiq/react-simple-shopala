import styled from "styled-components";

export const ButtonStyle = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 42px;
	.ant-btn ant-btn-primary {
		float: right !important;
	}
	.ant-btn > span {
		padding-left: 10px !important;
	}
	.ant-btn {
		display: flex !important;
		flex-direction: row !important;
		justify-content: center !important;
		align-items: center !important;
		background: #188bce !important;
		border-radius: 10px !important;
		padding: 16px 40px !important;
		width: 264px !important;
		height: 56px !important;
	}
	.ant-input-affix-wrapper {
		max-width: 420px !important;
		height: 56px !important;

		border: 0.5px solid #d2d2d2 !important;
		box-sizing: border-box !important;
		border-radius: 10px !important;
	}
`

export const SearchContainer = styled.div`
	width: 420px;
`