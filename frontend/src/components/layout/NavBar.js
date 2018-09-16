import React from 'react'
import {connect} from 'react-redux'
import "./Nav.css"

import NavButton from './NavButton'

function NavBar({loggedIn}){

	const buttons = loggedIn?[
		<NavButton key={1} link="/" name="Home" />,
		<NavButton key={2} link="/category1" name="Category 1" />,
		<NavButton key={3} link="/category2" name="Category 2" />,
		<NavButton key={4} link="/category3" name="Category 3" />,
		<NavButton key={5} float="right" link="/logout" name="Logout" />,
		<NavButton key={6} float="right" link="/new" name="Create post" />
	]:[
		<NavButton key={0} link="/login" name="Login" />
	]

	return <ol className="NavBar-list">
		{buttons}
	</ol>
}

const mapState = ({login}) => ({ 
	loggedIn : login.loggedIn 
})
export default connect(mapState)(NavBar)
