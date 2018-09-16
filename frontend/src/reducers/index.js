import { combineReducers } from 'redux'

import categories from './categories'
import comments from './comments'
import login from './login'
import posts from './posts'

export default combineReducers({
	categories,
	comments,
	login,
	posts
})
