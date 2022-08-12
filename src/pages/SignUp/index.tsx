import React, { useState } from "react"
import { Input, Button, Spin, Space, Form, Upload } from "antd"
import { getFile, validateMessages } from "utils/helpers"
import { Register as RegisterAction } from "redux/app/Actions/auth"
import { RegisterTypes } from "./type"
import { Link } from "react-router-dom"
import { loading } from "redux/app"
import { useSelector, useDispatch } from "react-redux"
import { UploadOutlined } from "@ant-design/icons"
import ReactLogo from "assets/icons/ReactLogo"
import {
	Container,
	LoginContainer,
	Logo,
	LoginButtonWrapper,
	LoginForm,
	LoginHeading,
	FieldTitle,
	LoadingSpinner,
	LoginButton,
	AlreadyHaveAccount,
	RegisterContainer,
	SubmitBtn,
} from "../Login/style"
const Register: React.FC = () => {
	const dispatch = useDispatch()
	const dataLoading = useSelector(loading)

	const onFinish = (values: RegisterTypes) => {
		// values.avatar = avatar
		// values.role="vendor"
		values.confirmEmail = undefined
		dispatch(RegisterAction(values))
		console.log(values)
	}

	return (
		<RegisterContainer>
			<LoginContainer>
				<Logo>
					<ReactLogo />
				</Logo>
				<Form onFinish={onFinish} autoComplete="off" validateMessages={validateMessages}>
					<LoginForm>
						<LoginHeading>Sign up</LoginHeading>
						<div>
							<Form.Item label="Company name" name="company_name" rules={[{ required: true }]}>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Form.Item label="Personal name" name="personal_name" rules={[{ required: true }]}>
								<Input />
							</Form.Item>
						</div>
						{/* <div>
							<Form.Item label="Last name" name="last_name" rules={[{ required: true }]}>
								<Input />
							</Form.Item>
						</div> */}
						<div>
							<Form.Item
								label="Email address"
								name="email"
								rules={[{ required: true, type: "email" }]}
							>
								<Input />
							</Form.Item>
						</div>
						<div>
							<Form.Item
								label="Confirm email address"
								name="confirmEmail"
								dependencies={["email"]}
								rules={[
									{ required: true, type: "email" },
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue("email") === value) {
												return Promise.resolve()
											}
											return Promise.reject(
												new Error("Confirm email does not match with email.")
											)
										},
									}),
								]}
							>
								<Input />
							</Form.Item>
						</div>

						<div>
							<Form.Item label="Password" name="password" rules={[{ required: true }]}>
								<Input type="password" />
							</Form.Item>
						</div>
						{/* <div>
							<Form.Item label="Profile picture" name="avatar" getValueFromEvent={getFile} rules={[{ required: true }]}>
								<Upload showUploadList={false}>
									<Button icon={<UploadOutlined />} className="ant-input">
										Click to Upload Profile picture
									</Button>
								</Upload>
							</Form.Item>
						</div> */}
						<AlreadyHaveAccount>
							<Link to="/login">Already have account? Login here.</Link>
						</AlreadyHaveAccount>

						<LoginButton>
							<LoginButtonWrapper>
								<Button htmlType="submit">Submit</Button>
							</LoginButtonWrapper>

							<LoadingSpinner>
								{dataLoading && (
									<Space size="middle">
										<Spin size="large" />
									</Space>
								)}
							</LoadingSpinner>
						</LoginButton>
					</LoginForm>
				</Form>
			</LoginContainer>
		</RegisterContainer>
	)
}

export default Register
