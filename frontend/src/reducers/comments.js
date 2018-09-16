const initial = {
	comments   : {},
	fetched    : [],
	loading    : false,
	error      : false
}

export default function reducer(state = initial, {type,payload,id}) {

	switch(type){
		case "DELETE_COMMENT_PENDING":
		case "DOWNVOTE_COMMENT_PENDING":
		case "UPVOTE_COMMENT_PENDING":
		case "FETCH_COMMENTS_PENDING":
			return {
				...state,
				error : false,
			}

		case "POST_COMMENT_PENDING":
			return {
				...state,
				loading : true, 
				error   : false
			}
		
		case "DELETE_COMMENT_FULFILLED":
			delete state.comments[payload]
			return {
				...state,
				comments : {...state.comments},
				error    : false,
				loading  : false,
			}

		case "FETCH_COMMENTS_FULFILLED":
			const posts = [...new Set(payload.map(c => c.parentId))]
			const comments = payload.reduce((result,item)=>{
				result[item.id] = item
				return result
			},{})
			return { 
				comments      : {...state.comments, ...comments},
				fetched    : [...state.fetched, ...posts],
				loading    : false,
				error      : false 
			}
		case "POST_COMMENT_FULFILLED":
			return {
				...state,
				comments : {...state.comments, [payload.id]:payload},
				fetched  : [...state.fetched, payload.parentId],
				error    : false,
				loading  : false,
			}
		case "DOWNVOTE_COMMENT_FULFILLED":
			state.comments[payload].voteScore--;
			return {
				...state,
				comments : {...state.comments},
				error    : false,
				loading  : false,
			}
		case "UPVOTE_COMMENT_FULFILLED":
			state.comments[payload].voteScore++;
			return {
				...state,
				comments : {...state.comments},
				error    : false,
				loading  : false,
			}
		
		case "DELETE_COMMENT_REJECTED":
		case "UPVOTE_COMMENT_REJECTED":
		case "DOWNVOTE_COMMENT_REJECTED":
		case "POST_COMMENT_REJECTED":
		case "FETCH_COMMENT_REJECTED":
			return { 
				...state,
				error   : true,
				loading : false,
			}

		default:
			return { ...state }
	}
}
