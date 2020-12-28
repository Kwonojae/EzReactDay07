import React, { Component } from 'react';
import MoviesItem from './MoviesItem';
import './MoviesList.scss'

class MoviesList extends Component {    
    render() {
        const { movies, onOver, onOut, onOpen } = this.props 
        return (
            <div className="MoviesList">
                <table>
                    <caption>제목</caption>
                    <colgroup>
                        <col className="w1"/>
                        <col className="w2"/>
                        <col className="w3"/>
                        <col className="w4"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>영화명</th>
                            <th>매출액</th>
                            <th>관객수</th>
                            <th>증감율</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                              movies.map( movie => <MoviesItem key={movie.rank} movie={movie} onOver={onOver} onOut={onOut} onOpen={onOpen} />)
                          }  
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MoviesList;