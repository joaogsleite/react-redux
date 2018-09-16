import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchPost, deletePost, upVote,downVote} from '../actions/posts'

import ActionButtom from '../components/forms/ActionButton'
import PageTitle from '../components/layout/PageTitle'
import PostDetail from '../components/posts/PostDetail'
import {Comment,NewComment} from '../components/comments'

class PostDetails extends Component {

	componentDidMount(){
		const postId = this.props.match.params.post
		if(!this.props.posts[postId])
			this.props.fetchPost(postId)
	}
	delete = ()=>{
		const del = window.confirm("Delete post?");
		if(del){
			this.props.deletePost(this.props.match.params.post)
			this.props.history.push("/")
		}
	}
	edit = ()=>{
		const post = this.props.match.params.post
		this.props.history.push("/posts/"+post+"/edit")
	}
	up = ()=>{
		this.props.upVote(this.props.match.params.post)
	}
	down = ()=>{
		this.props.downVote(this.props.match.params.post)
	}
	render(){
		const {title, body, author, voteScore, commentCount} = 
			this.props.posts[this.props.match.params.post]
		return <div>
			<PageTitle title="Post details" />
			<h3>{title}</h3>
			<p>{body}</p>
			<ul className="PostItem-details">
				<li><PostDetail name="author" value={author} /></li>
				<li><PostDetail name="comments" value={commentCount} /></li>
				<li><PostDetail name="score" value={voteScore} /></li>
			</ul>
			<ol className="PostItem-actions">
				<li><ActionButtom color="red" name="Delete" action={this.delete} /></li>
				<li><ActionButtom color="green" name="Edit" action={this.edit} /></li>
				<li><ActionButtom color="black" name="Upvote" action={this.up} /></li>
				<li><ActionButtom color="black" name="Downvote" action={this.down} /></li>
			</ol>
			<PageTitle title="Comments" />
			<NewComment />
			<Comment author="Example" score={3} text="Lorem ipsum dolor sit amet consectetur adipiscing" />
		</div>
	}
}

const mapState = ({posts}) => ({ 
	posts : posts.posts
})
const mapDispatch = dispatch => ({
	deletePost : (id)=>dispatch(deletePost(id)),
	fetchPost : (id)=>dispatch(fetchPost(id)),
	upVote : (id)=>dispatch(upVote(id)),
	downVote : (id)=>dispatch(downVote(id))
})
export default withRouter(connect(mapState,mapDispatch)(PostDetails))
