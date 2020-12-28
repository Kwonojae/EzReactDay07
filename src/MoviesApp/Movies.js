import React, { Component } from 'react';
import '../utils/css/reset.scss'
import './Movies.scss'
import MoviesList from './MoviesList';
import MoviesView from './MoviesView';
import Data from '../utils/api/data.json'
import Modal from './Modal';

class Movies extends Component {
    state = {
        movies : Data ,
        movieItem : {},
        isOpen : false
    }
    componentDidMount() {
        const {movies} = this.state
        this.setState({
            movieItem: movies[0]
        })
    }
    handleOver = (id) => {
        //find
        const {movies} = this.state
        //movieItem : movies[2] => find{} /filter[]
        this.setState({
            movieItem : movies.find(movie => movie.rank === id)
        })
    }
    handleOut = () => {
        const{movies}=this.state
        this.setState({
            movieItem : movies[0]
        })
    }
    handleOpen = (id) => {
        const{movies} = this.state
        this.setState({
            isOpen:true,
            movieItem : movies.find(movie=> movie.rank === id)
        })
    }
    handleClose = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        const {movies, movieItem,isOpen} = this.state 
        return (
            <div className="Movies">
                <MoviesView movieItem = {movieItem}/>
                <MoviesList movies = {movies} onOver={this.handleOver} onOut={this.handleOut} onOpen={this.handleOpen}/>
                {
                    isOpen && <Modal movieItem={movieItem} onClose={this.handleClose}/>
                }
            </div>
        );
    }
}

export default Movies;