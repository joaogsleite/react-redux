const initial = {
	posts      : [],
	fetched    : [],
	loading    : false,
	error      : false
}

export default function reducer(state = initial, {type,payload}) {
	
	switch(type){
		case "POST_POST_PENDING":
		case "FETCH_POSTS_PENDING":
			return {
				...state,
				loading : true, 
				error   : false
			}

		case "FETCH_POSTS_FULFILLED":
			const categories = [...new Set(payload.map(p => p.category))]
			return { 
				posts   : [...state.posts, ...payload],
				fetched : [...state.fetched, ...categories],
				loading : false,
				error   : false 
			}
		case "POST_POST_FULFILLED":
			return {
				posts   : [...state.posts, payload],
				fetched : [...state.fetched, payload.category],
				error   : false,
				loading : false,
			}

		case "POST_POST_REJECTED":
		case "FETCH_POSTS_REJECTED":
			return { 
				...state,
				error   : true,
				loading : false,
			}
		
		

		default:
			return { ...state }
	}
}
