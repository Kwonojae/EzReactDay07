import React, { useState } from 'react';

const Test10 = () => {
    const [count, setCount] = useState(1)
    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    const increment1 = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement1 = () => {
        setCount(state => state -1)

    }
    const increment2 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(state => state + 1)
        }
    }
    const decrement2 = () => {
        for(let i = 0; i < 3; i++) {
            setCount( state => state -1)
        }
    }
    return (
        <div>
            <h2>숫자 증가 감소:{count} </h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
            <p>
                <button onClick={increment1}>증가</button>
                <button onClick={decrement1}>감소</button>
            </p>
            <p>
                <button onClick={increment2}>5씩증가</button>
                <button onClick={decrement2}>3씩감소</button>
            </p>
        </div>
    );
};

export default Test10;