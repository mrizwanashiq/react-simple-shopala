import React, { useEffect } from "react"
import Topbar from "components/utility/Topbar"
import styled from "styled-components"
import DataTable from "components/utility/DataTable"
import TrashIcon from "assets/icons/Trash"
import ActionBtn from "components/utility/TopBarActionBtn"
import { useSelector, useDispatch } from "react-redux"
import { GetAllVendors, deleteAVendor } from "redux/app/Actions/Vendors"
import { data, loading } from "redux/app"
import { Popconfirm, message } from "antd"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Vendors = () => {
	const dispatch = useDispatch()
	const tableData = useSelector(data)
	const dataLoading = useSelector(loading)
	useEffect(() => {
		dispatch(GetAllVendors())
	}, [])
	function confirm(id: string) {
		dispatch(deleteAVendor(id))
	}

	return (
		<>
			<Topbar title="Vendors" showBack={false} />
			<ContentWrapper>
				{/* <ActionBtn title="Add New Vendor" link="/" showSearch={false} /> */}
				<DataTable
					TableColumns={[
						{
							title: "Vendors",
							render: () => <Avatar size={55} icon={<UserOutlined />} />,
						},
						{
							title: "Name",
							dataIndex: "personal_name",
							key: "name",
						},
						{
							title: "Product",
							dataIndex: "products",
							key: "product",
						},
						{
							title: "Campaigns",
							dataIndex: "campaigns",
							key: "campaign",
						},
						{
							title: "Delete",
							render: row => (
								<Popconfirm
									title="Are you sure to delete this vendor?"
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
					TableData={tableData}
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
	.ant-table-container table > thead > tr:first-child th:first-child{
		border-top-left-radius: 10px !important;
		border-bottom-left-radius: 10px;
	}

	.ant-table-container table > thead > tr:first-child th:last-child{
		border-top-right-radius: 10px !important;
		border-bottom-right-radius: 10px;
	}
`

export default Vendors
