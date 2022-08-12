import axios from "axios"
import { notification } from "antd"

import { requestStart, requestSuccess, requestFailure } from "../../"

import { Dispatch } from "redux"
import { history } from "../../../../history"
const token = localStorage.getItem("token")

export interface ProductTypes {
	name: string
	description: string
	quantity: string
	image?: any
	brand_logo?: any
}

//Get all products
export function GetAllProducts() {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			axios
				.get(process.env.REACT_APP_API_BASE_URL + "/api/product", {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res.status === 200) {
						const { data } = res.data
						dispatch(requestSuccess(data))
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}

//Get Single products
export function GetSingleProducts(id: string) {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			axios
				.get(process.env.REACT_APP_API_BASE_URL + `/api/product/${id}`, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res.status === 200) {
						const { data } = res.data
						dispatch(requestSuccess(data))
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}

//Add new products
export function AddNewProduct(data: ProductTypes) {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			const formData = new FormData()

			formData.append("name", data.name)
			formData.append("description", data.description)
			// formData.append("quantity", data.quantity)

			if (data.image && data.brand_logo) {
				formData.append("image", data.image[0])
				formData.append("brand_logo", data.brand_logo[0])
			}
			axios
				.post(process.env.REACT_APP_API_BASE_URL + "/api/product", formData, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res) {
						notification["success"]({
							message: "Product added  successfully",
						})
						history.push("/products")
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}

//Edit new products
export function EditProduct(id: string, data: ProductTypes) {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			const formData = new FormData()

			formData.append("name", data.name)
			formData.append("description", data.description)
			// formData.append("quantity", data.quantity)

			if (data.image) {
				formData.append("image", data.image[0])
			}
			if (data.brand_logo) {
				formData.append("brand_logo", data.brand_logo[0])
			}

			axios
				.patch(process.env.REACT_APP_API_BASE_URL + `/api/product/${id}`, formData, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res) {
						history.push("/products")
						notification["success"]({
							message: "Product edited  successfully",
						})
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}


//Delete a product

export function DeleteSingleProduct(id: string) {
	return async (dispatch: any) => {
		dispatch(requestStart())
		try {
			axios
				.delete(process.env.REACT_APP_API_BASE_URL + `/api/product/${id}`, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res.status === 200) {
						dispatch(GetAllProducts())
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}