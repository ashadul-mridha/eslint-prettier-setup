import React from 'react'

function Title() {

    console.log('render title');

  return (
    <>
        <h5>React Memorize </h5>
    </>
  )
}
export default React.memo(Title)
