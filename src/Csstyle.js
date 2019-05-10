import React from 'react';
import Inactivity from './inactivity';

/*class Csstyle extends React.Component{
	render(){
		const style = { color: 'blue' }
return(
			<div>
			<p> i m learning React </p>
			<h2> i m komal unde </h2>
			<div >
               <h1 style={style}>This text will have the color blue</h>
           </div>
		
			</div>
		
		);
	}
}export default Csstyle;*/

class Header extends React.Component {
  render() {

    // Update the class array if the state is visible
    
    const wrapperStyle = {
      backgroundColor: 'rgba(51, 202, 3, 1)'
    }

    const titleStyle = {
      color: '#111111'
    }

    const menuColor = {
      backgroundColor: '#111111'
    }

    return (
	<div>
      <div style={wrapperStyle} className="header">
        <div className="menuIcon">
          <div className="dashTop" style={menuColor}></div>
          <div className="dashBottom" style={menuColor}></div>
          <div className="circle" style={menuColor}></div>
        </div>

        <span style={titleStyle} className="title">
          {this.props.title}
        </span>

        <input
          type="text"
          placeholder="Search ..." />
        <div
          style={titleStyle}
          className="fa fa-search searchIcon"></div>
      </div>
	  <Inactivity />
	  </div>
    )
  }
}export default Header;
