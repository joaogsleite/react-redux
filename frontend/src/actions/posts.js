import {get, post, put, del} from '../utils/fetch'


export function fetchPosts(category){
    return {
		type    : "FETCH_POSTS",
		payload : category?get(`/${category}/posts`):get('/posts')
	}
}

export function fetchPost(postId){
    return {
		type    : "FETCH_POST",
		payload : get('/posts/'+postId)
	}
}

export function downVote(postId){
	return {
		type    : "DOWNVOTE_POST",
		payload : post('/posts/'+postId,{option:'downVote'}).then(res=>postId),
	}
}
export function upVote(postId){
	return {
		type    : "UPVOTE_POST",
		payload : post('/posts/'+postId,{option:'upVote'}).then(res=>postId),
	}
}

export function editPost(id, title, body){
	return {
		type    : "EDIT_POST",
		payload : put('/posts/'+id,{title,body}) 
	}
}

export function deletePost(postId){
	return {
		type    : "DELETE_POST",
		payload : del('/posts/'+postId).then(res=>postId)
	}
}

