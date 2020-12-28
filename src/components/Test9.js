import { set } from 'numeral';
import React, { useState } from 'react';

const Test9 = () => {
    const [text, setText] = useState('초기값')
    const[color, setColor] = useState('red')
    const handleClick1 = () => {
        setText('함수형은')
    }
    const handleClick2 = () => {
        setText('사용할떄');
    }
    const handleClick3 = () => {
        setText('꼭 선언')
    }
    // const handleClick4 = () => {
    //     setText('해줘야 됭')
    // }
    return (
        <div>
            <h2>useState</h2>
            <h1 style={{color}}>{text}</h1>
            <p>
                <button onClick={handleClick1}>글자1</button>
                <button onClick={handleClick2}>글자2</button>
                <button onClick={handleClick3}>글자3</button>
                <button onClick={()=> setText('안녕')}>글자4</button>
            </p>
            <p>
                <button onClick={()=>setColor('green')}>color1</button>
                <button onClick={()=> setColor('yellow')}>color2</button>
                <button onClick={()=> setColor('skyblue')}>color3</button>
                <button onClick={()=> setColor('darkblue')}>color4</button>
            </p>
        </div>
    );
};

export default Test9;

/*
    클래스
    state= {
        키 : 초기값
    }
    ->
    setState({
        키 : 값
    })
    함수형
    const [state, setState] = useState(초기값)
    setState(값)
*/