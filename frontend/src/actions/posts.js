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

export function editPost(id, title, body){
	return {
		type    : "EDIT_POST",
		payload : put('/posts/'+id,{title,body}) 
	}
}

export function deletePost(id){
	return {
		type    : "DELETE_POST",
		payload : del('/posts/'+id) 
	}
}

