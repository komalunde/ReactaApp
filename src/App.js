//import React from 'react';
//import ReactDOM from 'react-dom';	
import React, { Component, PropTypes } from 'React';
import Header from './Csstyle';
import Timers from './timers';
import PostDeal from './event.js';
import Repeat from './repeat';
import Pop from './api';
	
class Timer extends React.Component{
		constructor(props){
			super(props);
			this.state ={
				counter:0,
				message:"Click me"
			};
			console.log("Timer Constructor called");
		}
		buttonClicked(){
				this.setState({
					counter:this.state.counter+1,
					message:"Clicked"
				});
			};
	componentWillMount() {
    console.log('I am will mount method');
        }
	componentDidMount() {
            console.log('I am Didmount');
            }
	componentWillUnmount() {
          console.log('I am Unmount method');
      }
		componentWillUpdate(NewProps,NewState) {
			console.log('called before the render method');
            console.log('i m component Willupdate method');
			console.log("New Props:",NewProps);
			console.log("New State",NewState);
        }
		componentDidUpdate(preProps,preState) {
			console.log('called after the render method');
            console.log('i m component Did update method');
			console.log("preProps:",preProps);
			console.log("preState",preState);
        }
		render(){
			return(
			<div className="App">
			<h5>{this.state.counter}</h5>
			<button onClick={this.buttonClicked.bind(this)} className="btn btn-primary"> 
				{this.state.message}
				</button>
				// bind(this) is used in ES6 version
				<h6>
				<Logger time={this.state.counter} />
				<Header />
				<Timers startCount='100' />
				<PostDeal pro='helooooo react'/>
				<Pop />
				</h6>
			</div>
			);
		}
		
	}
class Logger extends React.Component{
		componentWillReceiveProps(nextProps) {
            console.log('I am Willreceice props');
			console.log("new Props:",nextProps);
        }
		shouldComponentUpdate(newProps,newState){
          console.log('I am component shouldupdate');
		  console.log("New Property value",newProps);
		  console.log("New statevalue",newState);
		  return true;
      }
	render(){
		return this.props.time;
	}
}export default Timer;
     