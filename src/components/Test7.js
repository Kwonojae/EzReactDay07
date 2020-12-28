import React from 'react';
import Test6Sub from './Test6Sub';
import Wrap from './Wrap';

const Test7 = () => {
    return (
        <div>
            <Wrap>
                <p>안녕해요?</p>
                <Test6Sub name="강호동"/>
                <Test6Sub name="권오재"/>
            </Wrap>
        </div>
    );
};

export default Test7;