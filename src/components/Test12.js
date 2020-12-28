import React, { useState } from 'react';
import { useRef } from 'react';

const Test12 = () => {
    const idInput = useRef()

    const[id, setId] = useState('')
    const[pass, setPass] = useState('')
    const[email, setEmail] = useState('')
    const handleChange1 = (e) => {
        const{value} = e.target
        setId(value)
    }
    const handleChange2 = (e) => {
        setPass(e.target.value)
    }
    const handleChange3 = (e) => {
        setEmail(e.target.value)
    }
    const handleRemove = () => {
        setId('')
        setPass('')
        setEmail('')
        idInput.current.focus()
    }
    return (
        <div>
            <input onChange={handleChange1} value={id} ref={idInput} type="text"/>
            <input onChange={handleChange2} value={pass} type="text"/>
            <input onChange={handleChange3} value={email} type="text"/>
            <button onClick={handleRemove}>지우기</button>
            <h2>{id}/{pass} /{email}</h2>
        </div>
    );
};

export default Test12;