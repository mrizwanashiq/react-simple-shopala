import React from "react"
import { Link } from "react-router-dom"

const index = () => {
	return (
		<div>
			404 page not found
			<Link to="/" onClick={()=>window.location.replace("/")}>Go Home</Link>
		</div>
	)
}

export default index
