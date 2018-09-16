import {get} from '../utils/fetch'


export function fetchPosts(category){
    return {
		type    : "FETCH_POSTS",
		payload : category?get(`/${category}/posts`):get('/posts')
	}
}

