import React from 'react'

function ShowState({ title, counter}) {

    console.log('render State Compo' , title);

  return (
    <>
      <h5> {title} of count : {counter}</h5>
    </>
  )
}

export default React.memo(ShowState)
