import React from 'react'
import './Form.css'

export default function ActionButtom({name,action,color}){
	return <div	className={"Button "+color} onClick={action}>
		{name}
	</div>
}
