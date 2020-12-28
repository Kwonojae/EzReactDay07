import React, { Component } from 'react';
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import axios from 'axios'

class Test3 extends Component {
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
                this.setState({
                    data : res.data
                })
            })
    }
    getData2= async() => {
        const res = fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await (await res).json()
        this.setState({
            data:data
        })
    }
    getData1 = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json() )
        .then(res => {
            this.setState({
                data:res
            })
        })
    }
    
    render() {
        const {data} = this.state
        return (
            <Container>
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {
                        data.map(item => <article key={item.id}>
                            <img src={item.thumbnailUr} alt=""/>
                            <p>
                                {item.title}
                            </p>
                        </article>)
                    }
                </Masonry>
            </Container>
        );
    }
}

export default Test3;
const Container = styled.div`
    width:1200px; margin: 0 auto;
    .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    }
    .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    }
    
    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
    }

    article {
        border:1px solid #000;
        margin-bottom:30px;
        padding:20px;
        img{
            width:100%;
        }
        p{
            margin-top:25px;
            font-size:20px;
            line-height:1.8;
        }
    }
`