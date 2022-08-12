import axios from "axios"
import { login as loginAction } from "redux/app"
import { notification } from "antd"
import { history } from "../../history"



export const login = data => {
	axios.post(process.env.REACT_APP_API_BASE_URL + "/user/login", data).then(res => {
		console.log(res)
	})
	console.log(process.env.REACT_APP_API_BASE_URL)
}
