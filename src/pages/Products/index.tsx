import React, { useEffect, useState } from "react"
import Topbar from "components/utility/Topbar"
import styled from "styled-components"
import DataTable from "components/utility/DataTable"
import { useSelector, useDispatch } from "react-redux"
import EditIcon from "assets/icons/EditIcon"
import ActionBtn from "components/utility/TopBarActionBtn"
import { Link } from "react-router-dom"
import { GetAllProducts, DeleteSingleProduct } from "redux/app/Actions/Products"
import { data, loading } from "redux/app"
import TrashIcon from "assets/icons/Trash"
import { Avatar, Popconfirm } from "antd"
const Products = () => {
	const dispatch = useDispatch()
	const tableData = useSelector(data)
	const dataLoading = useSelector(loading)

	const [query, setQuery] = useState("")
	const [filteredProducts, setFilteredProducts] = useState([])

	useEffect(() => {
		dispatch(GetAllProducts())
	}, [])

	function confirm(id: string) {
		dispatch(DeleteSingleProduct(id))
	}

	useEffect(() => {
		if (tableData.length > 0) {
			if (query) {
				let result = tableData.filter((cam: any) =>
					cam?.name?.toUpperCase().startsWith(query.toUpperCase())
				)
				setFilteredProducts(result)
			}
		}
	}, [query, tableData])
	return (
		<>
			<Topbar title="Products" showBack={false} />
			<ContentWrapper>
				<ActionBtn
					title="Add New Product"
					link="/add-product"
					showSearch={true}
					setQuery={setQuery}
				/>
				<DataTable
					TableColumns={[
						{
							title: "Product Image",
							render: row => <Avatar size={55} src={row.image} />,
							key: "product image",
						},
						{
							title: "Brand Logo",
							render: row => <Avatar size={55} src={row.brand_logo} />,
							key: "brand logo",
						},
						{
							title: "Name",
							dataIndex: "name",
							key: "name",
						},
						{
							title: "Edit",
							render: row => (
								<Link to={`/edit-product/${row._id}`}>
									<EditIcon />
								</Link>
							),
						},
						{
							title: "Delete",
							render: row => (
								<Popconfirm
									title="Are you sure to delete this product?"
									onConfirm={() => confirm(row._id)}
									onCancel={() => {}}
									okText="Yes"
									cancelText="No"
								>
									{" "}
									<span style={{ cursor: "pointer" }}>
										<TrashIcon />
									</span>{" "}
								</Popconfirm>
							),
						},
					]}
					TableData={filteredProducts.length > 0 && query !== "" ? filteredProducts : tableData}
					loading={dataLoading}
				/>
			</ContentWrapper>
		</>
	)
}

const ContentWrapper = styled.div`
	width: 87%;
	padding-top: 80px;
	margin: auto;
	.product-image {
	}
	.ant-avatar {
		border-radius: 0px !important;
	}

	.ant-table-container table > thead > tr:first-child th:first-child {
		border-top-left-radius: 10px !important;
		border-bottom-left-radius: 10px;
	}

	.ant-table-container table > thead > tr:first-child th:last-child {
		border-top-right-radius: 10px !important;
		border-bottom-right-radius: 10px;
	}
`

export default Products
