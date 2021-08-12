import { useEffect, useState } from "react";

const UseEffectSample = () => {
    const componentDidMount = () => console.log("component did mount");
    const sayHello = () => console.log("hellow wolrd");

    const [state, setstate] = useState(0);
    const [state2, setstate2] = useState(0);
    useEffect(sayHello, [state2]);
    useEffect(componentDidMount, []);

    return (
        <>
            <h1>UseEffectSample</h1>
            <button
                onClick={() => {
                    setstate(state + 1);
                }}
            >
                {state}
            </button>

            <button
                onClick={() => {
                    setstate2(state2 + 2);
                }}
            >
                {state2}
            </button>
        </>
    );
};

export default UseEffectSample;
