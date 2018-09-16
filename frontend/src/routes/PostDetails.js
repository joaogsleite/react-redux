import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

import ActionButtom from '../components/forms/ActionButton'
import PageTitle from '../components/layout/PageTitle'
import PostDetail from '../components/posts/PostDetail'
import {Comment,NewComment} from '../components/comments'

class PostDetails extends Component {
	delete = ()=>{
		const del = window.confirm("Delete post?");
		if(del){
			console.log("del",this.props.id)
		}
	}
	edit = ()=>{
		const category = this.props.category
		const post = this.props.id
		this.props.history.push("/"+category+"/"+post+"/edit")
	}
	up = ()=>{

	}
	down = ()=>{

	}
	render(){
		const {title, body, author, score, comments} = {
			title: "Example", body: "Example", author: "Name", 
			score: 3, comments:2 }
		return <div>
			<PageTitle title="Post details" />
			<h3>{title}</h3>
			<p>{body}</p>
			<ul className="PostItem-details">
				<li><PostDetail name="author" value={author} /></li>
				<li><PostDetail name="comments" value={comments} /></li>
				<li><PostDetail name="score" value={score} /></li>
			</ul>
			<ol className="PostItem-actions">
				<li><ActionButtom color="red" name="Delete" action={this.delete} /></li>
				<li><ActionButtom color="green" name="Edit" action={this.edit} /></li>
				<li><ActionButtom color="black" name="Upvote" action={this.up} /></li>
				<li><ActionButtom color="black" name="Downvote" action={this.down} /></li>
			</ol>
			<NewComment />
			<Comment author="Example" score={3} text="Lorem ipsum dolor sit amet consectetur adipiscing" />
		</div>
	}
}

export default withRouter(PostDetails)
