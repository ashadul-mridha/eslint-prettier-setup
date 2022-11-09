import React from 'react'
import { useState } from 'react'

export default function RenderPropsCounter(props) {

    
    const [counter , setCounter] = useState(0)

    const increment = () => {
        setCounter( prevState => prevState + 1)
    }

  return (
    <>
        {
            props.render( counter , increment )
        }
    </>
  )
}
