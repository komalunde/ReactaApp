import React from 'react';

class PostDeal extends React.Component{
	constructor (props){
			super(props)
			this.titlewasClicked = this.titlewasClicked.bind(this)	
			
	}
	titlewasClicked(event){
		event.preventDefault()
		alert(this.props.pro)	
		console.log(this.props.pro)	
		}
	render(){
		return(
			<div>
			<h1 onClick={this.titlewasClicked}>eventhandler</h1>
			<h2>hello react</h2>
			</div>
		)
	}
}export default PostDeal;