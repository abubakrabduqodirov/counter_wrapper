import React, { useState } from 'react'
import "./styles.css"
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    };

    const handleDecrement = () => {
        if (count === 0) {
            return
        }
        setCount((prevCount) => prevCount - 1)

    };

    return (
        <div className='wrapper'>
            <button className='button_wrapper' onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button className='button_wrapper' onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter