import React from 'react';

const Test6Sub = ({color, name, age, addr, tel, done}) => {
    return (
        <div>
            <p style={{color:color}}>이름은{name}입니다.</p>
            <p>
                {done === true? <b>*</b>:null }
                나이는{age}
            </p>
            <p>
                {done && <b>**</b>}
                주소는{addr}입니다.
            </p>
            <p>
                {done !== <b>***</b>}
                전화번호는{tel}입니다.
            </p>
            <p>
                {done === true ? <button>로그인</button> : <button>로그아웃</button>}
            </p>
            <p>
                {done && <button>로그인</button>}
            </p>
            <p>
                {done || <button>로그아웃</button>}
            </p>
        </div>
    );
};

export default Test6Sub;