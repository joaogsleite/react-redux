import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {login} from '../actions/login'
import PageTitle from '../components/layout/PageTitle'
import {ActionButton, TextField} from '../components/forms'

class Login extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	onChange = (name,value)=>{
		this.setState({[name]:value})
	}
	login = ()=>{
		this.props.login(this.state.username)
	}
	render(){
		const {loggedIn} = this.props
		const {username} = this.state
		if(!loggedIn) return <div>
				<PageTitle title="Login" />
				<TextField name="username" value={username} onChange={this.onChange} />
				<ActionButton color="blue" name="Login" action={this.login} />
			</div>
		else return <Redirect to="/" />	
	}
}

const mapState = ({login}) => ({ 
	loggedIn : login.loggedIn 
})
const mapDispatch = dispatch => ({
	 login : (username)=>dispatch(login(username))
})
export default connect(mapState,mapDispatch)(Login)
