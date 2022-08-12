import { ThemeProvider } from "styled-components"
import { GetUserProfile } from "redux/app/Actions/auth"
import { useDispatch } from "react-redux"
import React, { useEffect } from "react"
import Theme from "styles/Theme"
import Global from "styles/Global"
import Product from "pages/Products"
import Settings from "pages/Settings"
import Vendors from "pages/Vendors"
import EditProduct from "pages/Products/ProductAction"
import PageNotFound from "pages/404 Page"
import Login from "pages/Login"
import SignUp from "pages/SignUp"
import ProtectedRoutes from "./ProtectedRoutes"

import { Router, Route, Switch } from "react-router-dom"

import { history } from "./history"
import { userProfile } from "redux/app"
import "antd/dist/antd.css"
import Layout from "components/layout"

function App() {
	const dispatch = useDispatch()
	let token = localStorage.getItem("token")
	useEffect(() => {
		if (token) {
			dispatch(GetUserProfile())
		}
	}, [])

	const renderRoutes = () => {
		let path = window.location.pathname
		console.log(window.location)
		if (
			path === "/" ||
			path === "/products" ||
			path.includes("/edit-product/") ||
			path === "/add-product" ||
			path === "/checkouts" ||
			path.includes("/checkout-detail/") ||
			path === "/settings" ||
			path.includes("/edit-checkout/") ||
			path.includes("/add-checkout/") ||
			path === '/campaigns'||
			path.includes("/campaign-details/") 
		) {
			return (
				<Layout>
					<ProtectedRoutes
						path="/"
						exact={true}
						component={Product}
					/>
					<ProtectedRoutes
						path="/vendors"
						exact={true}
						component={Vendors}
					/>
					<ProtectedRoutes path="/products" exact component={Product} />
					<ProtectedRoutes path="/edit-product/:id" exact component={EditProduct} />
					<ProtectedRoutes path="/add-product" exact component={EditProduct} />
					<ProtectedRoutes path="/settings" exact component={Settings} />
				</Layout>
			)
		} else if (path === "/login" || path === "/sign-up") {
			return (
				<>
					<Route path="/login" exact={true} component={Login} />
					<Route path="/sign-up" exact={true} component={SignUp} />
				</>
			)
		}
	}

	return (
		<ThemeProvider theme={Theme}>
			<Global />
			<Router history={history}>
				<Switch>
					{renderRoutes()}

					<Route path="*" component={PageNotFound} />
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App
