import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import ActionButtom from '../forms/ActionButton'
import PostDetail from './PostDetail'
import "./Posts.css"

class PostItem extends Component {
	delete = ()=>{
		const del = window.confirm('Delete post?')
		if(del){
			console.log('delete',this.props.id)
		}
	}
	edit = ()=>{
		const category = this.props.match.params.category
		const post = this.props.id
		this.props.history.push('/posts/'+post+'/edit')
	}
	upvote = ()=>{

	}
	downvote = ()=>{

	}
	render(){
		const {id,title,author,commentCount,voteScore,category} = this.props
		return <div className="PostItem">
			<h3 className="PostItem-title">
				<Link to={`/posts/${id}`}>{title}</Link>
			</h3>
			<ul className="PostItem-details">
				<li><PostDetail name="author" value={author} /></li>
				<li><PostDetail name="comments" value={commentCount} /></li>
				<li><PostDetail name="score" value={voteScore} /></li>
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

export default withRouter(PostItem)
