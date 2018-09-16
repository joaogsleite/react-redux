const initial = {
	posts      : [],
	fetched    : [],
	allFetched : false,
	loading    : false,
	error      : false
}

export default function reducer(state = initial, {type,payload}) {

	switch(type){
		case "DELETE_POST_PENDING":
		case "EDIT_POST_PENDING":
		case "DOWNVOTE_POST_PENDING":
		case "UPVOTE_POST_PENDING":
		case "POST_POST_PENDING":
		case "FETCH_POST_PENDING":
		case "FETCH_POSTS_PENDING":
			return {
				...state,
				loading : true, 
				error   : false
			}
		
		case "DELETE_POST_FULFILLED":
			delete state.posts[payload.id]
			return {
				...state,
				posts   : {...state.posts},
				error   : false,
				loading : false,
			}

		case "EDIT_POST_FULFILLED":
			console.log('EDIT_POST_FULFILLED',payload.id)
			console.log('EDIT_POST_FULFILLED',payload.title)
			state.posts[payload.id].title = payload.title
			state.posts[payload.id].body  = payload.body
			return {
				...state,
				posts   : {...state.posts},
				error   : false,
				loading : false,
			}
		case "FETCH_POSTS_FULFILLED":
			const categories = [...new Set(payload.map(p => p.category))]
			const posts = payload.reduce((result,item)=>{
				result[item.id] = item
				return result
			},{})
			return { 
				posts      : {...state.posts, ...posts},
				fetched    : [...state.fetched, ...categories],
				allFetched : categories.length>1||this.state.allFetched,
				loading    : false,
				error      : false 
			}
		case "FETCH_POST_FULFILLED":
			return { 
				...state,
				posts   : {...state.posts, [payload.id]:payload},
				fetched : [...state.fetched, payload.category],
				loading : false,
				error   : false 
			}
		case "POST_POST_FULFILLED":
			return {
				...state,
				posts   : {...state.posts, [payload.id]:payload},
				fetched : [...state.fetched, payload.category],
				error   : false,
				loading : false,
			}
		case "DOWNVOTE_POST_FULFILLED":
			state.posts[payload.id].voteScore--;
			return {
				...state,
				posts   : [...state.posts],
				error   : false,
				loading : false,
			}
		case "UPVOTE_POST_FULFILLED":
			state.posts[payload.id].voteScore++;
			return {
				...state,
				posts   : [...state.posts],
				error   : false,
				loading : false,
			}
		
		case "DELETE_POST_REJECTED":
		case "EDIT_POST_REJECTED":
		case "UPVOTE_POST_REJECTED":
		case "DOWNVOTE_POST_REJECTED":
		case "POST_POST_REJECTED":
		case "FETCH_POST_REJECTED":
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
