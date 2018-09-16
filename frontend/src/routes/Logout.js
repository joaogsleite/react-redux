import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {logout} from '../actions/login'

class Logout extends Component{
	componentDidMount(){
		this.props.logout()
	}
	render(){
		return <Redirect to="/login" />
	}
}

const mapState = ({login}) => ({ 
	loggedIn : login.loggedIn 
})
const mapDispatch = dispatch => ({
	 logout : (username)=>dispatch(logout())
})
export default connect(mapState,mapDispatch)(Logout)
