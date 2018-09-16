import React,{Component} from 'react'
import './Form.css'

export default class TextField extends Component {
	handleChange = (event)=>{
		this.props.onChange(this.props.name,event.target.value)
	}
	render(){
		return <div className="Field">
			<div className="Field-title">
				{this.props.name}
			</div>
			<input  name={this.props.name} 
				    value={this.props.value}
					placeholder={this.props.name} 
					onChange={this.handleChange} />
		</div>
	}
}
