import React from 'react'

export default function PostDetails({match}){
	return <div>PostDetails: {match.params.post}</div>
}
