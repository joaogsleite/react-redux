import React from 'react'
import PostItem from './PostItem'

export default function PostList(props){
	return <div>
		<PostItem category="a" id="123" title="Lorem ipsum dolor" author="Conseur Adiping" comments={3} score={4} />
		<PostItem category="a" id="123" title="Lorem ipsum dolor" author="Conseur Adiping" comments={3} score={4} />
		<PostItem category="a" id="123" title="Lorem ipsum dolor" author="Conseur Adiping" comments={3} score={4} />
	</div  >
}
