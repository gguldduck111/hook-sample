import { useState } from "react";

const useInput = (initialState, validator) => {
    const [value, setName] = useState(initialState);

    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;

        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        willUpdate ? setName(value) : console.log("nono");
    };

    return { value, onChange };
};

const UseInputSample = () => {
    const validator = (value) => value.length < 10;
    const name = useInput("sdf", validator);
    const email = useInput("@", validator);
    return (
        <div>
            <h1>UseInputSample</h1>
            <input type="name" {...name} />
            <input type="email" alt="mail" {...email} />
        </div>
    );
};

export default UseInputSample;
