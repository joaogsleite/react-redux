import React,{Component} from 'react'
import {ActionButton,TextField} from '../forms'
import "../posts/Posts.css"

export default class NewComment extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}
	onChange = (name,value)=>{
		this.setState({text:value})
	}
	save = ()=>{

	}
	render(){
		const {text} = this.props
		return <div className="PostItem">
			<TextField name="New comment" value={text} onChange={this.onChange} />
			<ActionButton color="blue" name="Comment" action={this.save} />
		</div>
	}
}
