import uuid from '../utils/uuid'

const initial = {
	username : null,
	token    : null,
	loggedIn : false,
}

export default function reducer(state = initial, {type,payload}) {
	
	switch(type){
		case "LOGIN":
			return {
				usermame : payload,
				token    : uuid(),
				loggedIn : true
			}

		case "LOGOUT":
			return { ...initial }

		default:
			return { ...state }
	}
}
