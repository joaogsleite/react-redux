import {get, post, del} from '../utils/fetch'
import uuid from '../utils/uuid'

export function fetchComments(post){
    return {
		type    : "FETCH_COMMENTS",
		payload : get(`/posts/${post}/comments`)
	}
}

export function downVote(id){
	return {
		type    : "DOWNVOTE_COMMENT",
		payload : post('/comments/'+id,{option:'downVote'}).then((res)=>id),
	}
}
export function upVote(id){
	return {
		type    : "UPVOTE_COMMENT",
		payload : post('/comments/'+id,{option:'upVote'}).then((res)=>id),
	}
}

export function postComment(data){
	data.timestamp = Date.now()
	data.id = uuid()
	return {
		type    : "POST_COMMENT",
		payload : post('/comments',data)
	}
}

export function deleteComment(id){
	return {
		type    : "DELETE_COMMENT",
		payload : del('/comments/'+id).then((res)=>id)
	}
}

