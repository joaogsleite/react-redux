import React,{Component} from 'react'
import ActionButtom from '../forms/ActionButton'
import "../posts/Posts.css"

export default class Comment extends Component {
	delete = ()=>{
		const del = window.confirm("Delete post?");
		if(del){
			console.log("del",this.props.id)
		}
	}
	up = ()=>{

	}
	down = ()=>{

	}
	render(){
		const {author,text,score} = this.props
		return <div className="PostItem">
			<div className="PostItem-title">
				{text}
			</div>
			<ul className="PostItem-details">
				<li>Author: {author}</li>
				<li>Score: {score}</li>
			</ul>
			<ol className="PostItem-actions">
				<li><ActionButtom color="red" name="Delete" action={this.delete} /></li>
				<li><ActionButtom color="black" name="Upvote" action={this.up} /></li>
				<li><ActionButtom color="black" name="Downvote" action={this.down} /></li>
			</ol>
		</div>
	}
}
