import React, { Component } from 'react'

export default class ShowState extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <>
        <h5>count : {this.props.counter}</h5>
      </>
    )
  }
}
