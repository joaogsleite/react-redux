import React from 'react'

export default function Category({match}){
	return <div>Category: {match.params.category}</div>
}
