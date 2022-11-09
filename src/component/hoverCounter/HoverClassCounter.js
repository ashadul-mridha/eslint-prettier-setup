import React, { Component } from "react";

export default class HoverClassCounter extends Component{

    // state = {
    //     counter : 0
    // }

    // increment = () => {
    //     this.setState( (prevState) => ({counter: prevState.counter + 1}))
    // }

    render(){
        const { counter , increment} = this.props;
        return(
            <div>
                <button onMouseOver={increment}>Hover {counter} times</button>
            </div>
        )
    }
}