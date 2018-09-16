import React from 'react'

import PostList from '../components/posts/PostList'

export default function Category(props){
	return <div>
		<h1 className="Page-title">
			{props.match.params.category}
		</h1>
		<PostList />
	</div>
}
