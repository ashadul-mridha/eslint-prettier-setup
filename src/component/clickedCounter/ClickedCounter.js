import React from 'react'
import withCounter from '../HOC/withCounter'

function ClickedCounter(props) {

    const {count , increment} = props;

  return (
    <div>
        <button onClick={increment}>clicked {count} times</button>
    </div>
  )
}

export default withCounter(ClickedCounter)
