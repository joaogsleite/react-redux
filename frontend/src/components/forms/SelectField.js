import React,{Component} from 'react'
import './Form.css'

export default class SelectField extends Component {
	handleChange = (event)=>{
		this.props.onChange(this.props.name,event.target.value)
	}
	render(){
		return <div className="Field">
			<div className="Field-title">{this.props.name}</div>
			<select value={this.props.value}
					name={this.props.name} 
					onChange={this.handleChange} >
				{this.props.options.map(o=><option value={o}>{o}</option>)}
			</select>
		</div>
	}
}
