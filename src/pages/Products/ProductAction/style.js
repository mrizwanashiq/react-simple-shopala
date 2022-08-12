import styled from "styled-components"
export const ContentWrapper = styled.div`
	width: 87%;
	padding-top: 80px;
	margin: auto;
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

	.fileUploadInput {
		display: grid;

		position: relative;
		z-index: 1;
		max-width: 420px;
	}

	.fileUploadInput input {
		position: relative;
		z-index: 1;
		padding: 0 gap(m);
		width: 100%;
		height: 56px;
		padding-right: 125px;
		border: 0.5px solid #d2d2d2;
		box-sizing: border-box;
		border-radius: 10px;
		font-family: arial, sans-serif;
		font-size: 1rem;
		user-select: none;
		cursor: pointer;
		font-weight: regular;
	}
	.fileUploadInput input[type="file"] {
		padding: 0 gap(m);
	}
	.fileUploadInput input[type="file"]::-webkit-file-upload-button {
		visibility: hidden;
		margin-left: 10px;
		padding: 0;
		height: 50px;
		width: 0;
	}

	.fileUploadInput button {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100px;
		border: none;
		height: 56px;
		line-height: 0;
		user-select: none;
		color: white;

		background: rgba(0, 126, 197, 0.3);
		border-radius: 10px;

		font-family: arial, sans-serif;
		font-size: 1rem;
		font-weight: 800;
	}
	.fileUploadInput button svg {
		width: auto;
		height: 50%;
	}
`
export const InputWrapper = styled.div`
	padding-bottom: 24px;
`

export const FieldName = styled.p`
	font-family: DM Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 100%;
	/* identical to box height, or 16px */
	color: #5e5e5e;
`

export const ActionButtons = styled.div`
	display: flex;
	padding-top: 35px;
`
export const LoadingSpinner = styled.div`
	max-width: 305px;
	display: flex;
	justify-content: center;
`
