import React from 'react';

const Test5 = () => {
    const listItem = (len) => {
        let arr = []
        for (let i = 0; i < len; i++) {
            arr.push( <li>MenuItem{i} </li>)
            
        }
        return arr
    }
    return (
        <div>
            <h2>배열</h2>
            <ul>
                {
                    listItem(15)
                }
            </ul>
        </div>
    );
};

export default Test5;