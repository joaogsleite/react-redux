import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from './Home'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Category from './Category'
import PostDetails from './PostDetails'

export default function routes() {
	return <Switch>
		<Route exact path="/new" component={NewPost} />
		<Route exact path="/:category/:post/edit" component={EditPost} />
		<Route exact path="/:category/:post" component={PostDetails} />
		<Route exact path="/:category" component={Category} />
		<Route exact path="/" component={Home} />
	</Switch>
}
