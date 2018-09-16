import React,{Component} from 'react'
import {connect} from 'react-redux'
import "./Nav.css"

import NavButton from './NavButton'

function NavBar({loggedIn}){

	const buttons = loggedIn?[
		<NavButton link="/" name="Home" />,
		<NavButton link="/category1" name="Category 1" />,
		<NavButton link="/category2" name="Category 2" />,
		<NavButton link="/category3" name="Category 3" />,
		<NavButton float="right" link="/logout" name="Logout" />,
		<NavButton float="right" link="/new" name="Create post" />
	]:[
		<NavButton link="/login" name="Login" />
	]

	return <ol className="NavBar-list">
		{buttons}
	</ol>
}

const mapState = ({login}) => ({ 
	loggedIn : login.loggedIn 
})
export default connect(mapState)(NavBar)
