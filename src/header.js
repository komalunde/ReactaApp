import React from 'React';

class Header extends React.Component{
		render(){
		return(
			<div className="Header">
			<div className="fa fa-more"></div>
			<span className="title">Timeline</span>
			<input 
			type="text"
			className="searchInput"
			placeholder="Search.."   />
			<div className="fa fa-search searchIcon"></div>
			</div>
		);
		}
}export default Header;