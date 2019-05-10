//import React from 'react';
import React, { Component, Children } from 'React';

class Parent extends React.Component{
	render(){
		const buttons=Children.map(this.props.children,child => (
		<button>
		{child}
		</button>
		));
		
		return(
			<div>
			<h1>Total Children:{Children.count(this.props.children)}
				{buttons}
			</h1>
			</div>
		);
		
	}
	
}export default Parent;




/*const a = [1, 10, 100, 1000, 10000];
const Repeat = (props) => {
	return(
	<ul>
	{a.map(i => {
        return <ul><h1><li key={i}>{i}</li></h1></ul>
      })}
	</ul>
	
    <ul>
      {React.Children.map(a, i => <li>{i}</li>)}
    </ul>
  

	)
}

export default Repeat;*/
