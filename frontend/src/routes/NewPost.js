import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {TextField, SelectField, ActionButton} from '../components/forms'
import {PageTitle} from '../components/layout'
import {postPost} from '../actions/posts'

class NewPost extends Component {
	constructor(props){
		super(props)
		this.state = {
			author   : props.author,
			category : props.categories[0]
		}
	}
	onChange = (name,value)=>{
		console.log(name,value)
		this.setState({[name]:value})
	}
	save = ()=>{
		this.props.postPost(this.state)
		this.props.history.push('/')
	}
	render(){
		const {title,body,category} = this.state
		return <div>
			<PageTitle title="New post" />
			<TextField name="title" value={title} onChange={this.onChange} />
			<TextField name="body" value={body} onChange={this.onChange} />
			<SelectField name="category" value={category} options={this.props.categories} onChange={this.onChange} />
			<ActionButton color="green" name="Save" action={this.save} />
		</div>
	}
}

const mapState = ({categories,login}) => ({ 
	categories : categories.categories.map(c=>c.name),
	author     : login.username
})
const mapDispatch = dispatch => ({
	postPost : (post)=>dispatch(postPost(post))
})
export default withRouter(connect(mapState,mapDispatch)(NewPost))
