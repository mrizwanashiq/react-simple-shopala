import styled from 'styled-components'
export const ContentWrapper = styled.div`
	width: 87%;
	padding-top: 80px;
	margin: auto;
	.product-image {
	}
	.ant-avatar {
	}
	.save-btn {
		background: #188bce !important;
		color: #ffff !important;
	}

	.action-btn {
		filter: drop-shadow(-15px 42px 30px rgba(0, 0, 0, 0.05));
		width: 145px;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 16px;
		padding: 16px 40px;
		border: 1px solid #188bce;
		background: #ffff;
		color: #188bce;
		border-radius: 10px;
	}

	.ant-input {
		max-width: 420px !important;
		height: 56px;

		border: 0.5px solid #d2d2d2 !important;
		box-sizing: border-box !important;
		border-radius: 10px !important;
	}
	.editAvatar {
		position: relative;
		left: -28px;
		display: flex;
		width: 40px;
		height: 40px;
		background: white;
		border-radius: 50%;
		top: 16px;
		justify-content: center;
		align-items: center;
	}
	.campaign-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 40px;

		width: 269px;
		height: 56px;

		background: #fab400;
		border-radius: 10px;
	}
	.campaign-btn-container {
		display: flex;
		margin-top: 90px;
	}
	.avatar-wrapper {
		display: flex;
	}
	.mt-30 {
		margin-top: 30px;
	}
`