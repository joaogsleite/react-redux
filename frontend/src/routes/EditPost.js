import React,{Component} from 'react'

import PageTitle from '../components/layout/PageTitle'
import {TextField,ActionButton} from '../components/forms'

export default class EditPost extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	onChange = (name,value)=>{
		this.setState({[name]:value})
	}
	save = ()=>{

	}
	render(){
		const {title, body} = {title: "Example", body: "Example"}
		return <div>
			<PageTitle title="Edit post" />
			<TextField name="title" value={title} onChange={this.onChange} />
			<TextField name="body" value={body} onChange={this.onChange} />
			<ActionButton color="green" name="Save" action={this.save} />
		</div>
	}
}
