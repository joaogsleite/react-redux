

import {token} from '../reducers/login'

const BASE_URL = "http://localhost:3001"

export function get(url){
	return fetch(BASE_URL+url, {
		method: 'GET',
		headers: { 'Authorization': token }
	})
	.then(res=>res.json())
	.catch(err=>Promise.reject(err))
}
export function post(url,data){
	return fetch(BASE_URL+url, {
		method: 'POST',
		headers: { 
			'Authorization': token,
			'content-type': "application/json"
		},
		body: JSON.stringify(data)
	})
	.then(res=>res.json())
	.catch(err=>Promise.reject(err))
}
export function put(url,data){
	return fetch(BASE_URL+url, {
		method: 'PUT',
		headers: { 
			'Authorization': token,
			'content-type': "application/json"
		},
		body: JSON.stringify(data)
	})
	.then(res=>res.json())
	.catch(err=>Promise.reject(err))
}
export function del(url){
	return fetch(BASE_URL+url, {
		method: 'DELETE',
		headers: { 'Authorization': token }
	})
	.then(res=>res.json())
	.catch(err=>Promise.reject(err))
}
