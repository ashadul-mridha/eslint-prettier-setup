import React from 'react';
import withCounter from '../HOC/withCounter';

function HoverCounter(props) {

    const {count , increment} = props;

  return (
    <div>
        <button onMouseOver={increment}>Hover {count} times</button>
    </div>
  )
}

export default withCounter(HoverCounter)
