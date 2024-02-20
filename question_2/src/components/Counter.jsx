import React, {useState} from 'react';

const Counter =() => {
    const [val, setVal] = useState(0);

    const handleIncrement = () => {
        setVal(val + 1);
    };

    const handleDecrement = () => {
        setVal(val-1);
    };

    return (
        <div>
            {/* Display the value */}
            <div id='val'>{val}</div>

            {/* Increment */}
            <button id='increment' onClick={handleIncrement}>
                Increment
            </button>

            {/* Decrement */}
            <button id='decrement' onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;