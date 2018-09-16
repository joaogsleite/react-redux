import React from 'react'

import {PageTitle} from '../components/layout'
import PostList from '../components/posts/PostList'

export default function Home(props){
	return <div>
		<PageTitle title="Home" />
		<PostList />
	</div>
}
