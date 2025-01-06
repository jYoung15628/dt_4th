//  함수형 컴포넌트 State
import React, { useState } from 'react'

export const CounterFunction = () => {
   
    const [number, setNumber] = useState(0); // (초기값) = 0
  
    const onClickAdd = ()=> {
        setNumber(number +2);
    
    }

    const onClickM = () => {
        setNumber(number -1);
    }
    return (
        <>
            <div>CounterFunction</div>
            <h1> Number : {number} </h1>
            <button onClick={onClickAdd}>+2</button>
            <button onClick={onClickM}>-1</button>
        </>
    );
    
}