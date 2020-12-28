import React, { useState } from 'react';

const Test11 = () => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleRemove = (e) => {
        // e.preventDefualt()
        setText('')
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <button onClick={handleRemove}>지우기</button>
            <h4>{text}</h4>
        </div>
    );
};

export default Test11;