import React from "react"
import { Redirect, Route } from "react-router-dom"
import { history } from "./history"

function PrivateRoute({ component: Component, ...rest }:any) {
	const auth = localStorage.getItem("token")
	return (
			<Route {...rest} render={props => {
					if (!auth) {
							// not logged in so redirect to login page with the return url
							window.location.replace("/login")
							return 
					}

					// authorized so return component
					return <Component {...props} />
			}} />
	);
}
export default PrivateRoute
