import uuid from '../utils/uuid'

let savedToken;

const initial = {
	username : null,
	token    : null,
	loggedIn : false,
}

export { savedToken as token }

export default function reducer(state = initial, {type,payload}) {
	
	switch(type){
		case "LOGIN":
			savedToken = uuid()
			return {
				usermame : payload,
				token    : savedToken,
				loggedIn : true
			}

		case "LOGOUT":
			savedToken = null
			return { ...initial }

		default:
			return { ...state }
	}
}
