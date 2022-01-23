import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount(){
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    
    tick = () => {
        this.setState({ date: new Date().toLocaleTimeString()});
    }

    render () {
        return(
            <div>Current Time is {this.state.date}</div>
        )
    }
}

export default Clock;