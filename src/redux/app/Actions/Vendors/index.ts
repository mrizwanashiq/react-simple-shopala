import axios from "axios"
import { requestStart, requestSuccess, requestFailure, requestCompleted } from "../.."
import { Dispatch } from "redux"
const token = localStorage.getItem("token")
export function GetAllVendors(){
	return async (dispatch: Dispatch) => {
		dispatch(requestStart())
		try {
			axios
				.get(process.env.REACT_APP_API_BASE_URL + "/user", {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res.status === 200) {
						let vendors = res.data.data.filter((user: any) => user.role === "vendor")
						console.log(vendors)
						dispatch(requestSuccess(vendors))
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}

export function deleteAVendor(id: string) {
	return async (dispatch: any) => {
		dispatch(requestStart())
		try {
			axios
				.delete(process.env.REACT_APP_API_BASE_URL + `/user/${id}`, {
					headers: {
						Authorization: token != null ? `bearer ${token}` : "",
					},
				})
				.then(res => {
					if (res) {
						dispatch(GetAllVendors())
					}
				})
		} catch (error) {
			dispatch(requestFailure())
		}
	}
}
