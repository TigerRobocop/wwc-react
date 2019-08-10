import React, { useState, useEffect } from 'react';

function ClickCounter (props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title =  `${count} clicked`;
    });
    
    return (
        <div>
            <p>
                {props.name} age {props.age}
            </p>
            <p>
                You clicked {count} times
            </p>
            <button onClick={() => setCount(count +1)}>
                Click me
            </button>
        </div>
    );
};

export default ClickCounter;