import React, { useState, useEffect } from "react"
import { Input, Button, Form, Space, Spin } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { getFile, validateMessages } from "utils/helpers"
import ReactLogo from "assets/icons/ReactLogo"
import { loading } from "redux/app"
import { Link } from "react-router-dom"
import {
	Container,
	LoginContainer,
	Logo,
	LoginForm,
	LoginHeading,
	FieldTitle,
	ForgotPassword,
	LoginButton,
	LoginButtonWrapper,
	LoadingSpinner,
	ActionLinks,
} from "./style"
import { Login as LoginAction } from "redux/app/Actions/auth"
const Login = () => {
	let token = localStorage.getItem("token")
	const dataLoading = useSelector(loading)
	useEffect(() => {
		if (token) {
			window.location.replace("/")
		}
	}, [])
	interface LoginTypes {
		email: string
		password: string
	}

	const dispatch = useDispatch()

	const onFinish = (values: LoginTypes) => {
		// values.avatar = avatar
		dispatch(LoginAction(values))
	}
	return (
		<Container>
			<LoginContainer>
				<Logo>
					<ReactLogo />
				</Logo>
				<LoginForm>
					<Form onFinish={onFinish} autoComplete="off" validateMessages={validateMessages}>
						<LoginHeading>Login</LoginHeading>
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
							<Form.Item label="Password" name="password" rules={[{ required: true }]}>
								<Input type="password" />
							</Form.Item>
						</div>
						<ActionLinks>
							<ForgotPassword>
								<Link to="/sign-up">Create a new account.</Link>
							</ForgotPassword>
							{/* <ForgotPassword>Forgot Password</ForgotPassword> */}
						</ActionLinks>
						<LoginButton>
							<LoginButtonWrapper>
								<Button htmlType="submit">Login</Button>
							</LoginButtonWrapper>

							<LoadingSpinner>
								{dataLoading && (
									<Space size="middle">
										<Spin size="large" />
									</Space>
								)}
							</LoadingSpinner>
						</LoginButton>
					</Form>
				</LoginForm>
			</LoginContainer>
		</Container>
	)
}

export default Login
