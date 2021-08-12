import React, { useState } from "react";

const UseStateSample = () => {
    const [state, setState] = useState(0);
    const increaseCount = () => {
        setState(state + 1);
    };
    const decreaseCount = () => {
        setState(state - 3);
    };
    return (
        <div>
            <h1>UseStateSample</h1>
            <h2>{state}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
};

export default UseStateSample;
