import styled from "styled-components"

export const DataTable = styled.div`
	.ant-table-thead > tr > th {
		height: 80px !important;
		font-weight: bold !important;
		font-size: 16px !important;
		line-height: 100% !important;
		color: #5e5e5e !important;
		background: #e7f8fe !important;
	}
	.ant-table-thead
		> tr
		> th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
		display: none !important;
	}

	.ant-table-tbody > tr > td {
		height: 80px !important;
		border-bottom: 0px solid;
	}
`
