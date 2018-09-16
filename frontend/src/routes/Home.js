import React,{Component} from 'react'
import {connect} from 'react-redux'

import {PageTitle,Notification} from '../components/layout'
import PostList from '../components/posts/PostList'
import {fetchPosts} from '../actions/posts'

class Home extends Component {
	componentDidMount(){
		if(!this.props.allFetched)
			this.props.fetchPosts()
	}
	render(){
		const {error,loading,posts} = this.props
		return <div>
			<PageTitle title="Home" />
			{error&&<Notification color="red" message="Error loading posts" />}
			{loading&&<Notification color="blue" message="Loading posts..." />}
			<PostList posts={posts} />
		</div>
	}
}

const mapState = ({posts}) => ({ 
	error: posts.error,
	loading : posts.loading,
	allFetched : posts.allFetched,
	posts : Object.values(posts.posts)
})
const mapDispatch = dispatch => ({
	fetchPosts : (category)=>dispatch(fetchPosts(category))
})
export default connect(mapState,mapDispatch)(Home)
