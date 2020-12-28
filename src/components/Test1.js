import React, { Component } from 'react';
import styled from 'styled-components'

//증가 최대 10, 감소 최소 0 - 비활성화 
class Test1 extends Component {
    state = {
        count : 1, min:0, max:10
    }
    increment = () => {
        const{count, max} = this.state
        this.setState({
            count : count > max ? max : count + 1
        })
    }
    decrement = () => {
        const {count, min} = this.state
        this.setState({
            count : count < min ? min : count -1
        })
    }
    render() {
        const{count, min, max} = this.state
        return (
                // <Container width="300px">
                //     <h2>{count}</h2>
                //     <Button ClassName="up"/>
                //     <Button ClassName="down"/>
                // </Container>
                <Container width="300px">
                    <h2>{count}</h2>
                    <Button className="up" onClick={this.increment}
                            disabled={count === max}/>
                    <Button className="down"onClick={this.decrement}
                            disabled={count === min}/>
                </Container>
        );
    }
}

export default Test1;

const Container = styled.div`
    width:${props=> props.width}; border: 1px solid #000;
    padding:20px;
`
const Button = styled.button`
    border:none; margin:5px; transition:0.3s;
    color:#000; font-size:40px; cursor: pointer;
    padding: 0 30px 20px;
    &.up::after {
        content:"📥"
    }
    &.down::after {
        content:"📥"
    }
    &:hover {
        background:yellow;
    }
    &:disabled {
        filter:grayscale(100%);
        background:#999;
        cursor:not-allowed;
    }
`