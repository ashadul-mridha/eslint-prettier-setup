import React, { Component } from "react";

export default class ClickClassCounter extends Component {

    // state = {
    //     counter : 0
    // }

    // increment = () => {
    //     this.setState( (prevState) => ({counter : prevState.counter + 1}))
    // }

    render(){
        const { counter , increment} = this.props;
        return(
            <div>
                <button onClick={increment}>Click {counter} times</button>
            </div>
        )
    }
}