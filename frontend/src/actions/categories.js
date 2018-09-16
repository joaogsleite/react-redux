import {get} from '../utils/fetch'


export function fetchCategories(){
    return {
		type    : "FETCH_CATEGORIES",
		payload : get('/categories')
	}
}
