import React from 'react';


class Contactslist extends React.Component{
		render(){
			var myStyle = {
         fontSize: 20,
         color: '#FF0000'
      }
	  return(
		<div>
		<button>contact list</button>
		<h4 style = {myStyle}>Contact list</h4>
			<li>zycus</li>
			<li>reliance</li>
			<li>percistent</li>
		</div>		
			);
		}
}export default Contactslist;