import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import logo from '../assets/logo.svg'
import './App.css'

import Routes from '../routes'

class App extends Component {
	render() {
		return <Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					<Routes />
        		</p>
			</div>
		</Router>
	}
}

export default App;
