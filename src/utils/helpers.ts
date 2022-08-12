export const getFile = (e: any) => {
	console.log("Upload event:", e)

	if (Array.isArray(e)) {
		return e
	}
	return e && e.fileList
}

export const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
}
