export interface AppState {
	pageTitle: string
	goBack: boolean | (() => void)
	isAuthorized: boolean
	loading: boolean
	hasErrors: boolean
	data: any
	userProfile:any
}

export interface SetPageTitleAction {
	pageTitle: string
}
export interface SetGoBackAction {
	goBackTrigger: boolean | (() => void)
}
export interface LoadData {
	data: any
}

export interface LoginAction {
	isAuthorized: boolean
}
