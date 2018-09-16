import React from 'react'

import PostList from '../components/posts/PostList'
import {PageTitle} from '../components/layout'

export default function Category(props){
	return <div>
		<PageTitle title={props.match.params.category} />
		<PostList />
	</div>
}
