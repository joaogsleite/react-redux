import React,{Component} from 'react'
import {connect} from 'react-redux'
import {postComment} from '../../actions/comments'
import {ActionButton,TextField} from '../forms'
import "../posts/Posts.css"

class NewComment extends Component {
	constructor(props){
		super(props)
		this.state = {
			author : props.author,
			parentId : props.post
		}
	}
	onChange = (name,value)=>{
		this.setState({body:value})
	}
	save = ()=>{
		this.props.postComment(this.state)
		this.setState({body:''})
	}
	render(){
		const {body} = this.state
		return <div className="PostItem">
			<TextField name="New comment" value={body} onChange={this.onChange} />
			<ActionButton color="blue" name="Comment" action={this.save} />
		</div>
	}
}
const mapState = ({categories,login}) => ({ 
	author     : login.username
})
const mapDispatch = dispatch => ({
	postComment : (data)=>dispatch(postComment(data))
})
export default connect(mapState,mapDispatch)(NewComment)
