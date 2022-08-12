import axios from "axios"
import {
	loginSuccess,
	loginFailure,
	requestStart,
	loadUserProfile,
	loadUserProfileFailure,
	requestCompleted,
} from "../../"
import { notification } from "antd"
import { history } from "../../../../history"
import { Dispatch } from "redux"
const token = localStorage.getItem("token")

export function Login(data: { email: string; password: string }) {
	return async (dispatch: any) => {
		if (!data.email || !data.password) {
			notification["error"]({
				message: "Please fill all values to login",
			})
		} else {
			dispatch(requestStart())
			try {
				axios
					.post(process.env.REACT_APP_API_BASE_URL + "/user/login", data)
					.then(res => {
						if (res.status === 200) {
							const { data } = res.data
							localStorage.setItem("token", data.token)
							dispatch(loginSuccess())
							console.log(data)
							window.location.replace("/")
							notification["success"]({
								message: "Login Successfully",
							})
						}
					})
					.catch(error => {
						notification["error"]({
							message: error.response.data.data,
						})
						dispatch(loginFailure())
					})
			} catch (error: any) {
				throw error
			}
		}
	}
}

//Get User Profile
export function GetUserProfile() {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			axios
				.get(process.env.REACT_APP_API_BASE_URL + `/user/profile/`, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res.status === 200) {
						const { data } = res.data
						dispatch(loadUserProfile(data))
					}
				})
				.catch(error => {
					notification["error"]({
						message: error.response.data.data,
					})
					dispatch(requestCompleted())
				})
		} catch (error) {
			dispatch(loadUserProfileFailure())
		}
	}
}

export function Register(data: any) {
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		console.log(data)
		try {
			axios
				.post(process.env.REACT_APP_API_BASE_URL + "/user/register", data)
				.then(res => {
					if (res) {
						dispatch(requestCompleted())
						history.push("/login")
						notification["success"]({
							message: "Registered successfully",
						})
					}
				})
				.catch(error => {
					notification["error"]({
						message: error.response.data.data,
					})
					dispatch(requestCompleted())
				})
		} catch (error) {
			dispatch(loadUserProfileFailure())
		}
	}
}
