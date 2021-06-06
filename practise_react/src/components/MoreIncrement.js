import React from 'react'
import { useState } from 'react';


const Button = props => {
    const handleClick = () => props.onClickFunction(props.increment);
      return (
        <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
  const Display = props => {
      return (
        <div>{props.message}</div>
    );
  }

const ClickEventMoreIncrement = () => { 
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter}/>
    </div>  
  );
}

export default ClickEventMoreIncrement