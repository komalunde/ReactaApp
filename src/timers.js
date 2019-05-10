import React from 'react';

class Timers extends React.Component{
	constructor(props){
		super(props)
		this.state={
			count : 1
		}
	}
		render (){
			const {count} =this.state
			return(
				<div>
				<h1> Count Number : {count} </h1>
				</div>
			);
		}
		//set interval
		//clear interval
		componentDidMount() {
			const {startCount}=this.props
			this.setState({
				count :startCount
			})
			this.doIntervalChange()
			
            }
			
		doIntervalChange () {
			this.myInterval= setInterval(() => {
			this.setState(prevState => ({
				count:prevState.count-1
			}))
			},1000)
		}	
		componentWillMount() {
		clearInterval(this.myInterval)
        }
			  
}export default Timers;