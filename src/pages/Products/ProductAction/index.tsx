import React, { useState, useEffect } from "react"
import Topbar from "../../../components/utility/Topbar"
import styled from "styled-components"
import { Button, Tooltip, Input, Form } from "antd"
import AddIcon from "assets/icons/AddFolderIcon"
import { data as stateData, loading } from "redux/app"
import { useSelector, useDispatch } from "react-redux"
import { validateMessages } from "utils/helpers"
import { AddNewProduct, EditProduct, GetSingleProducts } from "redux/app/Actions/Products"
import { ContentWrapper, InputWrapper, FieldName, ActionButtons, LoadingSpinner } from "./style"
import { Spin, Space } from "antd"
import { useHistory } from "react-router-dom"

export interface ProductTypes {
	image?: any
	brand_logo?: any
}

const ProductAction = (props: any) => {
	const [data, setData] = useState<ProductTypes>({})
	const [submitted, setSubmitted] = useState(false)
	const [form] = Form.useForm()
	let history = useHistory()

	let id = props.match?.params?.id

	const dispatch = useDispatch()
	const dataLoading = useSelector(loading)
	const stateProductData = useSelector(stateData)

	const onFinish = (values: any) => {
		if (data.image) {
			values.image = data.image
		}
		if (data.brand_logo) {
			values.brand_logo = data.brand_logo
		}

		if (id) {
			dispatch(EditProduct(id, values))
		} else {
			if (values.brand_logo && values.image) {
				dispatch(AddNewProduct(values))
			}
		}
	}

	useEffect(() => {
		if (id) {
			dispatch(GetSingleProducts(id))
		}
	}, [])

	useEffect(() => {
		if (stateProductData) {
			form.setFieldsValue({
				name: id ? stateProductData[0]?.name : "",
				description: id ? stateProductData[0]?.description : "",
				quantity: id ? stateProductData[0]?.quantity : "",
			})
		}
	}, [stateProductData])

	const { TextArea } = Input

	return (
		<>
			<Topbar title={id ? "Edit Product" : "Add Product"} showBack={true} />
			<ContentWrapper>
				<Form
					onFinish={onFinish}
					form={form}
					autoComplete="off"
					validateMessages={validateMessages}
				>
					<div>
						<FieldName>
							Name <span style={{ color: "red" }}>*</span>
						</FieldName>
						<Form.Item name="name" rules={[{ required: true, message: "Name is required!" }]}>
							<Input />
						</Form.Item>
					</div>
					<div>
						<FieldName>
							Description <span style={{ color: "red" }}>*</span>
						</FieldName>
						<Form.Item
							name="description"
							rules={[{ required: true, message: "Description is required!" }]}
						>
							<TextArea style={{ height: 120 }} />
						</Form.Item>
					</div>
					<InputWrapper>
						<div className="fileUploadInput">
							<FieldName>Product image {!id && <span style={{ color: "red" }}>*</span>}</FieldName>
							<input
								type="file"
								onChange={e => {
									setData({ ...data, image: e.target.files })
								}}
							/>
							<button>
								<AddIcon />
							</button>
						</div>
						{submitted && !data.image && !id && (
							<p style={{ color: "#ff4d4f" }}>Product image is required!</p>
						)}
					</InputWrapper>
					<InputWrapper>
						<div className="fileUploadInput">
							<FieldName>
								Add a brand logo {!id && <span style={{ color: "red" }}>*</span>}
							</FieldName>
							<input
								type="file"
								onChange={e => {
									setData({ ...data, brand_logo: e.target.files })
								}}
							/>
							<button>
								<AddIcon />
							</button>
						</div>
						{submitted && !data.brand_logo && !id && (
							<p style={{ color: "#ff4d4f" }}>Brand logo is required!</p>
						)}
					</InputWrapper>

					<ActionButtons>
						<Button
							className="action-btn"
							onClick={() => {
								history.goBack()
							}}
						>
							Cancel
						</Button>
						<Button
							className="action-btn save-btn "
							htmlType="submit"
							onClick={() => {
								setSubmitted(true)
							}}
						>
							Save
						</Button>
						<LoadingSpinner>
							{dataLoading && (
								<Space size="middle">
									<Spin size="large" />
								</Space>
							)}
						</LoadingSpinner>
					</ActionButtons>
				</Form>
			</ContentWrapper>
		</>
	)
}

export default ProductAction
