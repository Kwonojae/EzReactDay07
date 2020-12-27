import React, { Component } from 'react';
import '../utils/css/reset.scss'
import './Movies.scss'
import MoviesList from './MoviesList';
import MoviesView from './MoviesView';
import Data from '../utils/api/data.json'
import Modal from './Modal';

class Movies extends Component {
    state = {
        movies : Data 
    }
    render() {
        const {movies} = this.state 
        return (
            <div className="Movies">
                <MoviesView />
                <MoviesList movies = {movies} />
                
            </div>
        );
    }
}

export default Movies;