import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions/categories'
import "./Nav.css"

import NavButton from './NavButton'

class NavBar extends Component{
	componentDidMount(){
		this.props.fetchCategories()
	}
	render(){
		const {loggedIn, categories} = this.props
		
		let buttons = []

		if(loggedIn){
			buttons = [
				<NavButton key={1} link="/" name="Home" />,
				<NavButton key={2} float="right" link="/logout" name="Logout" />,
				<NavButton key={3} float="right" link="/new" name="Create post" />
			]
			console.log(categories,'categories')
			for(let c of categories)
				buttons.push(<NavButton key={c.path} link={'/'+c.path} name={c.name} />)
		}
		else buttons = [<NavButton key={0} link="/login" name="Login" />]

		return <ol className="NavBar-list">
			{buttons}
		</ol>
	}
}

const mapState = ({login,categories}) => ({ 
	loggedIn : login.loggedIn,
	categories: categories.categories
})
const mapDispatch = dispatch => ({
	fetchCategories : ()=>dispatch(fetchCategories())
})
export default connect(mapState,mapDispatch)(NavBar)
