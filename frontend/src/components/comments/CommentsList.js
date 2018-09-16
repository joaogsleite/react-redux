import React,{Component} from 'react'
import {fetchComments} from '../../actions/comments'
import {connect} from 'react-redux'
import {Comment,NewComment} from './'

class CommentsList extends Component {
	componentDidMount(){
		this.props.fetchComments(this.props.post)
	}
	render(){
		const comments = this.props.comments.filter(c=>c.parentId===this.props.post)
		return <div>
			<NewComment post={this.props.post} />
			{comments&&comments.map((c,i)=><Comment key={i} {...c} />)}
		</div>
	}
}
const mapState = ({comments}) => ({ 
	comments : Object.values(comments.comments)
})
const mapDispatch = dispatch => ({
	fetchComments : (id)=>dispatch(fetchComments(id)),
})
export default connect(mapState,mapDispatch)(CommentsList)
