import React, { Component } from 'react';

export default class Clock extends Component {

    // initialize state
    constructor(props) {
        super(props); // call component state
        this.state = { date: new Date() };
    }


    // when dom is ready it call 1 time like useEffect without dependency
    componentDidMount(){
        this.clockTimer = setInterval(() => {
            this.setState({
                date : new Date()
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }


    render() {
        return (
            <div>
                <h1>Clock: {this.state.date.toLocaleTimeString(this.props.local)}</h1>
            </div>
        );
    }
}
