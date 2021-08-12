import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(() => {
        updateTitle();
    }, [title]);

    return setTitle;
};

const UseTitleSample = () => {
    const setTitle = useTitle("loading.....");

    setTimeout(() => {
        setTitle("Let's GOGOGO");
    }, 5000);

    return (
        <div>
            <h1>UseTitleSample</h1>
        </div>
    );
};

export default UseTitleSample;
