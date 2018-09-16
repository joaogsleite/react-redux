import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css"

import AppHeader from './AppHeader'
import NavBar from './NavBar'

import Routes from '../../routes'

export default function App(props){
	return <Router>
		<div className="App">
			<AppHeader />
			<NavBar />
			<div className="App-container">
				<Routes />
			</div>
		</div>
	</Router>
}
