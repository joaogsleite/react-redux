import React from 'react'
import {PageTitle} from '../components/layout'

export default function PostDetails({match}){
	return <div>PostDetails: {match.params.post}</div>
}
