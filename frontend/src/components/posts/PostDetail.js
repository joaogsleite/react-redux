import React from 'react'
import "./Posts.css"

export default function PostDetail({name,value}){
	return <div className="PostDetail">
		<span className="PostDetail-name">{name}:</span> 
		{value}
	</div>
}
