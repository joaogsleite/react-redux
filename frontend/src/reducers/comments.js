const initial = {
	comments   : [],
	fetched    : [],
	loading    : false,
	error      : false
}

export default function reducer(state = initial, {type,payload}) {
	
	switch(type){
		case "POST_COMMENT_PENDING":
		case "FETCH_COMMENTS_PENDING":
			return {
				...state,
				loading : true, 
				error   : false
			}

		case "FETCH_COMMENTS_FULFILLED":
			const posts = [...new Set(payload.map(c => c.parentId))]
			return { 
				comments : [...state.comments, ...payload],
				fetched  : [...state.fetched, ...posts],
				loading  : false,
				error    : false 
			}
		case "POST_COMMENT_FULFILLED":
			return {
				comments : [...state.comments, payload],
				fetched  : [...state.fetched, payload.parentId],
				error    : false,
				loading  : false,
			}
			
		case "POST_COMMENT_REJECTED":
		case "FETCH_COMMENTS_REJECTED":
			return { 
				...state,
				error   : true,
				loading : false,
			}
			
		default:
			return { ...state }
	}
}
