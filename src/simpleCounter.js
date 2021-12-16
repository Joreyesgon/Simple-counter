import React, { useState } from 'react';
import { count } from 'yargs';
import './counter.css'

const Counter = () => {
    const [number, setNumber] = useState(0);

    const addNumber = () =>{
        setNumber(number + 1);
    };

    const restNumber = () => {
        setNumber(number - 1);
    };

    return (<div className="myCounter">
        <h1>{number}</h1>
        <div className="buttons">
            <button className="rest" onClick={restNumber}>-</button>
            <button className="add" onClick={addNumber}>+</button>
        </div>
    </div>
    )
};

export default Counter;