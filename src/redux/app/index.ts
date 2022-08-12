import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState, SetGoBackAction, SetPageTitleAction, LoginAction, LoadData } from "./types"
import axios from "axios"
import { RootState } from "redux/store"

const initialState: AppState = {
	pageTitle: "",
	goBack: false,
	isAuthorized: false,
	loading: false,
	hasErrors: false,
	data: [],
	userProfile:{}
}

const appReducer = createSlice({
	name: "app",
	initialState,
	reducers: {
		setPageTitle(state, { payload: { pageTitle } }: PayloadAction<SetPageTitleAction>) {
			state.pageTitle = pageTitle
		},
		setGoBack(state, { payload: { goBackTrigger } }: PayloadAction<SetGoBackAction>) {
			state.goBack = goBackTrigger
		},
		loginSuccess(state) {
			state.isAuthorized = true
			state.loading = false
			state.hasErrors = false
		},
		loginFailure(state) {
			state.loading = false
			state.isAuthorized = false
			state.hasErrors = true
		},
		requestStart: state => {
			state.loading = true
		},
		requestCompleted: state => {
			state.loading = false
		},

		requestSuccess(state, { payload }: PayloadAction<LoadData>) {
			state.data = payload
			state.loading = false
			state.hasErrors = false
		},

		requestFailure(state) {
			state.loading = false
			state.hasErrors = true
		},
		loadUserProfile (state, { payload }: PayloadAction<LoadData>) {
			state.userProfile = payload
			state.isAuthorized = true
			state.loading = false
			state.hasErrors = false
		},
		loadUserProfileFailure(state){
			state.userProfile = {}
			state.isAuthorized = false
			state.loading = false
			state.hasErrors = true
		}
	},
})

export const getPageTitle = (state: RootState) => state.app.pageTitle
export const getGoBack = (state: RootState) => state.app.goBack
export const data = (state: RootState) => state.app.data
export const loading = (state: RootState) => state.app.loading
export const userProfile = (state:RootState) =>state.app.userProfile

export const {
	setPageTitle,
	setGoBack,
	loginSuccess,
	loginFailure,
	requestStart,
	requestSuccess,
	requestFailure,
	loadUserProfile,
	loadUserProfileFailure,
	requestCompleted
} = appReducer.actions

export default appReducer.reducer
