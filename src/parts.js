import React from 'react';

class Parts extends React.Component{
	render(){
const Ampm = ({hours}) => (<span>{hours >= 12 ? 'pm' : 'am'}</span>)

const Hour    = (props) => {
  let {hours} = props;
  if (hours === 0) { hours = 12; }
  if (props.twelveHours) { hours -= 12; }
  return (<span>{hours}</span>)
}
const Minute  = ({minutes}) => (<span>{minutes<10 && '0'}{minutes}</span>)

const Second  = ({seconds}) => (<span>{seconds<10 && '0'}{seconds}</span>)

const Separator = ({separator}) => (<span>{separator || ':'}</span>)
return(
	<div>
	<h1> hello Clock</h1>
	</div>
)	
	
}
}export default Parts;
