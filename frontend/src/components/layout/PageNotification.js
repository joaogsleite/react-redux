import React from 'react'
import './Page.css'

export default function Notification({message,color}){
	return <div className={'Notification '+color}>
		<p>{message}</p>
	</div>
}
