import React from 'react'
import "./Nav.css"

import NavButton from './NavButton'

export default function App(props){
	return <ol className="NavBar-list">
		<NavButton link="/" name="Home" />
		<NavButton link="/category1" name="Category 1" />
		<NavButton link="/category2" name="Category 2" />
		<NavButton link="/category3" name="Category 3" />
		<NavButton float="right" link="/new" name="Create post" />
	</ol>
}
