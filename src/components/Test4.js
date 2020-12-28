import React from 'react';

const Test4 = () => {  
    const msg = '하이 방갑다 연습한다 그러함 리액트 연습중 그러할걸 똥마렵다 샤워도'
    const message = (len) => {
        let str = ''
        if (msg.length > len) {
            str = msg.substr(0, len) + '...'
        }
        return str
    }

    return (
        <div>
            <h2>함수형 연습</h2>        
            <p>{message(10)}</p>
            <p>{message(15)}</p>
        </div>
    );
};

export default Test4;