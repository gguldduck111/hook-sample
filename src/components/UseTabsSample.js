import { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    const onClick = (idx) => setCurrentIndex(idx);

    return {
        currentItem: allTabs[currentIndex],
        onClick,
    };
};

const UseTabsSample = () => {
    const { currentItem, onClick } = useTabs(0, content);

    return (
        <div>
            <h1>UseTabsSample</h1>
            {content.map((section, idx) => {
                return (
                    <button key={idx} onClick={() => onClick(idx)}>
                        {section.tab}
                    </button>
                );
            })}
            <h2>{currentItem.content}</h2>
        </div>
    );
};

export default UseTabsSample;
