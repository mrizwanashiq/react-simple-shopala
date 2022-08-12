import React, { useEffect } from "react"
import Topbar from "components/utility/Topbar"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { data, loading } from "redux/app"
import { Avatar, Form, Input, Button, Space, Spin, Row, Col } from "antd"
import CameraIcon from "assets/icons/CameraIcon"
import AddSquareIcon from "assets/icons/AddSquare"
import { useHistory } from "react-router-dom"
import {userProfile } from "redux/app"
import { FieldName, ActionButtons } from "pages/Products/ProductAction/style"
import { ContentWrapper } from "./style"
const Products = () => {
	const dispatch = useDispatch()
	const tableData = useSelector(data)
	const [form] = Form.useForm()
	let history = useHistory()
	const userProfileData = useSelector(userProfile)

	form.setFieldsValue({
		personal_name:userProfileData?.personal_name,
		company_name:userProfileData?.company_name,
		email:userProfileData?.email
	})

	const onFinish = (values: any) => {}

	return (
		<>
			<Topbar title="Edit profile" showBack={false} />
			<ContentWrapper>
				<div className="avatar-wrapper">
					<Avatar size={130} icon={<UserOutlined />} />

					<div className="editAvatar">
						<CameraIcon />
					</div>
				</div>
				<div className="mt-30">
					<Form onFinish={onFinish} form={form} autoComplete="off">
						<Row>
							<Col span={9}>
								<FieldName>Name</FieldName>
								<Form.Item name="personal_name" rules={[{ required: true }]}>
									<Input disabled />
								</Form.Item>
							</Col>
							<Col span={8}>
								<FieldName>Email</FieldName>
								<Form.Item name="email" rules={[{ required: true }]}>
									<Input disabled/>
								</Form.Item>
							</Col>
							<Col span={8}>
								<FieldName>Company</FieldName>
								<Form.Item name="company_name" rules={[{ required: true }]}>
									<Input disabled />
								</Form.Item>
							</Col>
						</Row>

						{/* {dataLoading && (
							<Space size="middle">
								<Spin size="large" />
							</Space>
						)} */}

						{/* <ActionButtons>
							<Button
								className="action-btn"
								onClick={() => {
									history.goBack()
								}}
							>
								Cancel
							</Button>
							<Button className="action-btn save-btn " htmlType="submit">
								Save
							</Button>
						</ActionButtons> */}

						{/* <div className="campaign-btn-container">
							<Link to="/add-checkout">
								<Button className="campaign-btn " style={{ marginRight: 20, color: "#fff" }}>
									<AddSquareIcon /> {"  "}{" "}
									<span style={{ marginLeft: 10 }}>Add a new campaign</span>
								</Button>
							</Link>
							<Link to="/add-product">
								<Button className="campaign-btn save-btn " htmlType="submit">
									<AddSquareIcon /> {"  "} <span style={{ marginLeft: 10 }}>Add a new product</span>
								</Button>
							</Link>
						</div> */}
					</Form>
				</div>
			</ContentWrapper>
		</>
	)
}

export default Products
