import React, { FC } from "react"
import { DataTable } from "./styles"
import { Table } from "antd"

interface ColumnsType {
	key?: string
	title: string
	dataIndex?: string
	render?: (row?:any) => JSX.Element
}
interface DataTypes {
	key: string
	name: string
	product: string
	campaign: string
}
interface TableProps {
	TableColumns: ColumnsType[]
	TableData: DataTypes[]
	loading: boolean
}
const index: React.FC<TableProps> = props => {
	return (
		<DataTable>
			<Table columns={props.TableColumns} dataSource={props.TableData} loading={props.loading} />
		</DataTable>
	)
}

export default index
