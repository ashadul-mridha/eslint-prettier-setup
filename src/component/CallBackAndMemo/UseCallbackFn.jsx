import React from 'react'
import { useState } from 'react'
import Button from './Button';
import ShowState from './ShowState';
import Title from './Title'

export default function UseCallbackFn() {

    const [countOne , setCountOne] = useState(0);
    const [countFive , setCountFive] = useState(0);

    const handleCouterOne = () => {
        setCountOne( (prevState) => prevState + 1)
    }

    const handleCouterFive = () => {
        setCountFive( (prevState) => prevState + 5)
    }

  return (
    <>
        <Title />
        <ShowState counter={countOne} />
        <Button handleClick={handleCouterOne} />
        <ShowState counter={countFive} />
        <Button handleClick={handleCouterFive} />
    </>
  )
}
