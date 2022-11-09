import React, { Component } from "react";


const withCounter = (OriginalComponent) => {

    class NewComponent extends Component {
        
        state = {
            counter : 0
        }

        increment = () => {
            this.setState( (prevState) => ({counter : prevState.counter + 1}))
        }

        render(){
            return(
                <OriginalComponent count={this.state.counter} increment={this.increment} />
            )
        }
    }

    return NewComponent;
}

export default withCounter;