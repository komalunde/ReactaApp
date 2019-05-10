//import React from 'react';
import React, { Component, Children } from 'React';

class  Slideshow extends React.Component{
	constructor(props){
		super(props)
	this.state = {
		total : 0,
		current : 0
	}
	}
	componentDidMount() {
	const{children}= this.props;
			this.setState({ total:Children.count(children) });
			this.interval=setInterval(this.Next,300);
            }
	componentWillUnmount() {
			clearInterval(this.interval);
      }
	  
Next(){
	  const{total,current}=this.state
	  this.setState({
			
			current:current + 1 === total ? 0 : current + 1 
	  });
	  
	  };
	render(){
		const{children}=this.props;
		const bullets = Array(this.state.total).fill("O")
		bullets [this.state.current]="O";
		return(
		<div className="slideshow">
		<div>{bullets}</div>
		{Children.toArray(children)[this.state.current]}
		</div>
		);
	}
}export default Slideshow;