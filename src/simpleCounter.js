import React, { useState } from 'react';
import './counter.css'

const Counter = () => {
    const [number, setNumber] = useState(0);

    const addNumber = () =>{
        setNumber(number + 1);
    };

    const restNumber = () => {
        setNumber(number - 1);
    };

    const initialNumber = number > 0 ? "positive" : number < 0 ? "negative" : null 

    return (<div className="myCounter">
        <h1 className={initialNumber}>{number}</h1>
        <div className="buttons">
            <button className="rest" onClick={restNumber}>-</button>
            <button className="add" onClick={addNumber}>+</button>
        </div>
    </div>
    )
};

export default Counter;