import {get, post, put} from '../utils/fetch'


export function fetchPosts(category){
    return {
		type    : "FETCH_POSTS",
		payload : category?get(`/${category}/posts`):get('/posts')
	}
}

export function editPost(id, title, body){
	return {
		type    : "EDIT_POST",
		payload : put('/posts/'+id,{title,body}) 
	}
}

