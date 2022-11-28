import React from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react'
import Button from './Button';
import ShowState from './ShowState';
import Title from './Title'

export default function UseCallbackFn() {

    const [countOne , setCountOne] = useState(0);
    const [countFive , setCountFive] = useState(0);

    // use callback return memorize fn 
    const handleCouterOne = useCallback(() => {
        setCountOne( (prevState) => prevState + 1)
    }, [])

    // use callback return memorize fn 
    const handleCouterFive = useCallback(() => {
        setCountFive( (prevState) => prevState + 5)
    }, [])

    // use Memo return memorize fn Value
    const isEvenOrOdd = useMemo(() => {

      let i = 0;
      while(i < 10000000) i +=1;
       return countOne % 2 === 0;

    }, [countOne])


  return (
    <>
        <Title />
        <ShowState counter={countOne} title="one" />
        <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
        <br />
        <Button handleClick={handleCouterOne}>
          Increment By One
        </Button>
        <ShowState counter={countFive} title="five"  />
        <Button handleClick={handleCouterFive}>
          Increment By Five
        </Button>
    </>
  )
}
