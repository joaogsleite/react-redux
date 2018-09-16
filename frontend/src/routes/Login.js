import React,{Component} from 'react'

import PageTitle from '../components/layout/PageTitle'
import {ActionButton, TextField} from '../components/forms'

export default class Home extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	onChange = (name,value)=>{
		this.setState({[name]:value})
	}
	login = ()=>{
		
	}
	render(){
		const {username} = this.props
		return <div>
			<PageTitle title="Login" />
			<TextField name="username" value={username} onChange={this.onChange} />
			<ActionButton color="blue" name="Login" action={this.login} />
		</div>
	}
}
