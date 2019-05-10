import React from 'react';
//import Parent from './repeat';
import Slideshow from './slideshow';

class Pop extends React.Component{
	render(){
		return(
		<div>
		<Slideshow>
		<img src="http://placekitten.com/200/300" alt="cat pic" />
		<img src="http://placekitten.com/200/305" alt="cat pic" />
		<img src="http://placekitten.com/200/307" alt="cat pic" />
		</Slideshow>
		</div>
		
		);
	}

}export default Pop;