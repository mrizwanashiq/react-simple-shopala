import axios from "axios"
const token = localStorage.getItem("token")

//Get all products
export async function GetAllProducts() {
	try {
		let res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/api/product", {
			headers: {
				Authorization: token != null ? `bearer ${token}` : "",
			},
		})
		return res
	} catch (error) {
		throw error
	}
}

export async function GetAllLanguages() {
	try {
		let res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/api/language", {
			headers: {
				Authorization: token != null ? `bearer ${token}` : "",
			},
		})
		return res
	} catch (error) {
		throw error
	}
}


export async function GetAllCurrencies() {
	try {
		let res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/api/currency", {
			headers: {
				Authorization: token != null ? `bearer ${token}` : "",
			},
		})
		return res
	} catch (error) {
		throw error
	}
}


export async function GetAllTerritories() {
	try {
		let res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/api/territory", {
			headers: {
				Authorization: token != null ? `bearer ${token}` : "",
			},
		})
		return res
	} catch (error) {
		throw error
	}
}


export async function GetAllVendors() {
	try {
		let res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/user", {
			headers: {
				Authorization: token != null ? `bearer ${token}` : "",
			},
		})
		return res
	} catch (error) {
		throw error
	}
}