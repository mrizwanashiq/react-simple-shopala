import React from "react"
import { Button, Tooltip, Input } from "antd"
import styled from "styled-components"
import AddSquareIcon from "assets/icons/AddSquare"
import { SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import SearchIcon from "assets/icons/SearchIcon"
import { ButtonStyle, SearchContainer } from "./style"

interface ActionBtnProps {
	title: string
	link: string
	showSearch: boolean
	setQuery: (query: string) => void
}
const index: React.FC<ActionBtnProps> = ({ title, link, showSearch, setQuery }) => {
	return (
		<ButtonStyle>
			<SearchContainer>
				{showSearch && (
					<Input
						type="text"
						prefix={<SearchIcon />}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search"
						style={{ fontFamily: "Arial, FontAwesome" }}
					/>
				)}
			</SearchContainer>
			<Link to={link}>
				<Button type="primary">
					<AddSquareIcon /> {title}
				</Button>
			</Link>
		</ButtonStyle>
	)
}

export default index
