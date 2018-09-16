import React,{Component} from 'react'
import {connect} from 'react-redux'
import ActionButtom from '../forms/ActionButton'
import "../posts/Posts.css"
import {downVote,upVote,deleteComment} from '../../actions/comments'

class Comment extends Component {
	delete = ()=>{
		const del = window.confirm("Delete comment?");
		if(del){
			this.props.deleteComment(this.props.id)
		}
	}
	up = ()=>{
		this.props.upVote(this.props.id)
	}
	down = ()=>{
		this.props.downVote(this.props.id)
	}
	render(){
		const {author,body,voteScore,timestamp} = this.props
		return <div className="PostItem">
			<div className="PostItem-title">
				{body}
			</div>
			<ul className="PostItem-details">
				<li>Author: {author}</li>
				<li>Score: {voteScore}</li>
				<li>Date: {new Date(timestamp).toUTCString()}</li>
			</ul>
			<ol className="PostItem-actions">
				<li><ActionButtom color="red" name="Delete" action={this.delete} /></li>
				<li><ActionButtom color="black" name="Upvote" action={this.up} /></li>
				<li><ActionButtom color="black" name="Downvote" action={this.down} /></li>
			</ol>
		</div>
	}
}

const mapState = ({comments}) => ({ 
	comments : comments.comments
})
const mapDispatch = dispatch => ({
	upVote : (id)=>dispatch(upVote(id)),
	downVote : (id)=>dispatch(downVote(id)),
	deleteComment : (id)=>dispatch(deleteComment(id)),
})
export default connect(mapState,mapDispatch)(Comment)
