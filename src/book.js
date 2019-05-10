import React, { Component, PropTypes } from 'React';

class Bookom extends React.Component{
	constructor(props){
		super(props);
		this.state={
			head:"header from state and props111",
			cont:"content from state and props222"
		}
		
	}
	render(){
		return(
			<div>
			<Head headprop={this.state.head} />
			<Cont contprop={this.state.cont} />
			</div>
		);
	}
}
class Head extends React.Component{
	render(){
		return(
		<div>
		<h2>{this.props.headprop}</h2>
		</div>
		);
	}
}
class Cont extends React.Component{
	render (){
		return(
		<div>
		<h2>{this.props.contprop}
		</h2>
		</div>
		);
	}
}export default Bookom;