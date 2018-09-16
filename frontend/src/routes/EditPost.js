import React,{Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {editPost} from '../actions/posts'
import PageTitle from '../components/layout/PageTitle'
import {TextField,ActionButton} from '../components/forms'

class EditPost extends Component {
	constructor(props){
		super(props)
		const postId = this.props.match.params.post
		const post = this.props.posts[postId]
		this.state = {
			...post
		}
	}
	onChange = (name,value)=>{
		this.setState({[name]:value})
	}
	save = ()=>{
		const {id, title, body} = this.state
		this.props.editPost(id,title,body)
		this.props.history.push('/')
	}
	render(){
		const {title, body} = this.state
		return <div>
			<PageTitle title="Edit post" />
			<TextField name="title" value={title} onChange={this.onChange} />
			<TextField name="body" value={body} onChange={this.onChange} />
			<ActionButton color="green" name="Save" action={this.save} />
		</div>
	}
}

const mapState = ({posts}) => ({ 
	posts : posts.posts
})
const mapDispatch = dispatch => ({
	editPost : (id,title,body)=>dispatch(editPost(id,title,body))
})
export default withRouter(connect(mapState,mapDispatch)(EditPost))
