import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

export default function App({link,name,float}){
	return <li className="NavBar-item" style={{float:float||'left'}}>
		<NavLink exact={true} to={link} activeClassName="active">
			{name}
		</NavLink>
	</li>
}
