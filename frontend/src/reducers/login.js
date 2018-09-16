let savedToken;

const initial = {
	username : null,
	token    : null,
	loggedIn : false,
}

export { savedToken as token }

export default function reducer(state = initial, {type,payload}) {
	
	switch(type){
		case "RESTORE_SESSION":
		case "LOGIN":
			savedToken = payload.token
			return {
				usermame : payload.username,
				token    : payload.token,
				loggedIn : true
			}

		case "LOGOUT":
			savedToken = null
			return { ...initial }

		default:
			return { ...state }
	}
}
