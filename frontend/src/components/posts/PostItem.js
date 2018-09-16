import React,{Component} from 'react'

export default class PostItem extends Component {
	delete = ()=>{
		const del = window.confirm('Delete post?')
		if(del){
			console.log('delete',this.props.id)
		}
	}
	edit = ()=>{
		const {category,id} = this.props
		console.log('edit',category,id)
	}
	upvote = ()=>{
		console.log('up')
	}
	downvote = ()=>{
		console.log('down')
	}
	render(){
		const {title,author,comments,score} = this.props
		return <div>
			<h3>
				{title}
			</h3>
			<ul>
				<li>Author: {author}</li>
				<li>Comments: {comments}</li>
				<li>Score: {score}</li>
			</ul>
			<ol>
				<li onClick={this.delete}>Delete</li>
				<li onClick={this.edit}>Edit</li>
				<li onClick={this.upvote}>Upvote</li>
				<li onClick={this.downvote}>Downvote</li>
			</ol>
		</div>
	}
}
