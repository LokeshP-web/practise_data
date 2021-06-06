import React from 'react'
import { useState } from 'react';

const ClickEventOneIncrement = props =>{
    const {name} = props
    const [counter, setCounter] = useState(0)
    return (
        <div> 
            <p> This is {name} </p>
        <button onClick={() => setCounter(counter+1)}>{counter}</button>
        </div>
    )
}
export default ClickEventOneIncrement