import React from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    return (
        <div>
            <h2>함수형 props 연습</h2>
            <Test6Sub
                name='홍길동'
                age={20}
                addr='서울시 서초구'
                tel='000-1111-2222'
                color='red'
                done={true}
            />
            <hr/>
            <Test6Sub
                age={30}
                addr='서울시'
                color='green'
            />
            <hr/>
            <Test6Sub
                
            />
        </div>
    );
};

Test6Sub.defaultProps = {
    name:'아무개',
    age:'20',
    color:'red',
    done: false,
    addr:'서울',
    ted:'123-4567-8920'
}

export default Test6;