import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts}){
	return <div>
		{posts.map((p,i)=><PostItem key={i} {...p} />)}
	</div  >
}
