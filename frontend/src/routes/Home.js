import React from 'react'

import PostList from '../components/posts/PostList'

export default function Home(props){
	return <div>
		<h1 className="Page-title">
			Home
		</h1>
		<PostList />
	</div>
}
