import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Home from './Home'
import Login from './Login'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Category from './Category'
import PostDetails from './PostDetails'

const loggedIn = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => loggedIn?
		<Component {...props} />:<Redirect to='/login' />
	} />
)

export default function routes() {
	return <Switch>
		<Route exact path="/login" component={Login} />
		<PrivateRoute exact path="/new" component={NewPost} />
		<PrivateRoute exact path="/:category/:post/edit" component={EditPost} />
		<PrivateRoute exact path="/:category/:post" component={PostDetails} />
		<PrivateRoute exact path="/:category" component={Category} />
		<PrivateRoute exact path="/" component={Home} />
	</Switch>
}
