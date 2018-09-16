import React,{Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {connect} from 'react-redux'
import {restore} from '../../actions/login'
import "./App.css"

import AppHeader from './AppHeader'
import NavBar from './NavBar'

import Routes from '../../routes'

class App extends Component {

	componentDidMount(){
		if(!this.props.loggedIn)
			this.props.restoreSession()
	}
	render(){
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
}

const mapState = ({login}) => ({
	loggedIn : login.loggedIn
})
const mapDispatch = dispatch => ({
	restoreSession : ()=>dispatch(restore())
})
export default connect(mapState,mapDispatch)(App)
