import React,{Component} from 'react'
import {TextField, SelectField, ActionButton} from '../components/forms'
import {PageTitle} from '../components/layout'

export default class NewPost extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}
	onChange = (name,value)=>{
		this.setState({[name]:value})
	}
	save = ()=>{
		console.log('save')
	}
	render(){
		const {title,body,author,category} = this.state
		const categories = ['a','b','c']
		return <div>
			<PageTitle title="New post" />
			<TextField name="title" value={title} onChange={this.onChange} />
			<TextField name="body" value={body} onChange={this.onChange} />
			<TextField name="author" value={author} onChange={this.onChange} />
			<SelectField name="category" value={category} options={categories} onChange={this.onChange} />
			<ActionButton color="green" name="Save" action={this.save} />
		</div>
	}
}
