import React,{Component} from 'react'
import {connect} from 'react-redux'

import {PageTitle,Notification} from '../components/layout'
import PostList from '../components/posts/PostList'
import {fetchPosts} from '../actions/posts'

class Home extends Component {
	componentDidMount(){
		const category = this.props.match.params.category
		if(!this.props.fetched.includes(category))
			this.props.fetchPosts()
	}
	render(){
		const {error,loading,posts} = this.props
		const category = this.props.match.params.category
		return <div>
			<PageTitle title={category} />
			{error&&<Notification color="red" message="Error loading posts" />}
			{loading&&<Notification color="blue" message="Loading posts..." />}
			<PostList posts={posts.filter(p=>p.category==category)} />
		</div>
	}
}

const mapState = ({posts}) => ({ 
	error: posts.error,
	loading : posts.loading,
	fetched : posts.fetched,
	posts : Object.values(posts.posts)
})
const mapDispatch = dispatch => ({
	fetchPosts : (category)=>dispatch(fetchPosts(category))
})
export default connect(mapState,mapDispatch)(Home)
