import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ActionButtom from '../forms/ActionButton'
import PostDetail from './PostDetail'
import {deletePost, upVote, downVote } from '../../actions/posts'
import "./Posts.css"

class PostItem extends Component {
	delete = ()=>{
		const del = window.confirm("Delete post?");
		if(del){
			this.props.deletePost(this.props.id)
			this.props.history.push("/")
		}
	}
	edit = ()=>{
		this.props.history.push('/posts/'+this.props.id+'/edit')
	}
	upvote = ()=>{
		this.props.upVote(this.props.id)
	}
	downvote = ()=>{
		this.props.downVote(this.props.id)
	}
	render(){
		const {id,timestamp,title,author,commentCount,voteScore} = this.props
		return <div className="PostItem">
			<h3 className="PostItem-title">
				<Link to={`/posts/${id}`}>{title}</Link>
			</h3>
			<ul className="PostItem-details">
				<li><PostDetail name="author" value={author} /></li>
				<li><PostDetail name="comments" value={commentCount} /></li>
				<li><PostDetail name="score" value={voteScore} /></li>
				<li><PostDetail name="date" value={new Date(timestamp).toUTCString()} /></li>
			</ul>
			<ol className="PostItem-actions">
				<li><ActionButtom color="red" name="Delete" action={this.delete} /></li>
				<li><ActionButtom color="green" name="Edit" action={this.edit} /></li>
				<li><ActionButtom color="blue" name="Upvote" action={this.upvote} /></li>
				<li><ActionButtom color="blue" name="Downvote" action={this.downvote} /></li>
			</ol>
		</div>
	}
}

const mapState = ({posts}) => ({ 
	posts : posts.posts
})
const mapDispatch = dispatch => ({
	deletePost : (id)=>dispatch(deletePost(id)),
	upVote : (id)=>dispatch(upVote(id)),
	downVote : (id)=>dispatch(downVote(id))
})
export default withRouter(connect(mapState,mapDispatch)(PostItem))
