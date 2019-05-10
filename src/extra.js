import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'React';
import Contactslist from './Contactslist';
import New from './New';
import Bookom from './book';

class App extends React.Component {
	render(){ 
		return(
            
				<div>
				<Header />
				<Contactslist />
				<New />
				<Bookom />
			<h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
				</div>
		);
	}
	
}
class Header extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}
/*class Tb extends React.Component{
	render(){
		return(
		
		<div>
			<table>
			<tr>komal</tr>
			<td>122</td>
			<td>145</td>
			<tr>nikita</tr>
			<tr>raju</tr>
			</table>
			
		</div>
		)
	}
}*/
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
export default App;


