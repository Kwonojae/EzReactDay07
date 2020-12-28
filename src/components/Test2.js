import React, { Component } from 'react';
import axios from 'axios'
//외부 데이터 비동기처리  -- 자바스크립트의 프로미스기반 동기화 
//axios(외부 설치), fetch(내장)
//render 후 데이터 가져오기  => componentDidMount
class Test2 extends Component {
    state = {
        data : []
    }
    componentDidMount() {
        this.getData4()
    }
    getData4 = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            data : res.data
        })
    }
    getData3 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    data : res.data
                })
            })
    }
    getData1 = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res=> res.json() )
        .then( res => { //데이터 가져오는부분 res는 임의로 만든것 
            this.setState({
                data: res
            })
        })
    }
    getData2 = async() => {
        //함수명에 async + await
        const res = fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await(await res).json()
        this.setState({
            data:data
        })
    }
    
    render() {
        const {data} = this.state
        return (
            <div>
                <h4>데이터 가져오기 </h4>
                {
                    data.map(item => <p key={item.id}>
                    {item.userId} / {item.id} / {item.title} / {item.body}
                    </p>)
                }
            </div>
        );
    }
}

export default Test2;