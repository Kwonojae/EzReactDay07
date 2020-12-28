import React, { Component } from 'react';
import numeral from 'numeral'

class MoviesItem extends Component {
    render() {
        const {movie, onOver,onOut, onOpen} = this.props 
        return (
            <>
              <tr onMouseOver={()=> onOver(movie.rank)}
                onClick={() => onOpen(movie.rank)}
              >    
              {/* onMouseOut={onOut} */}
                  <td>{movie.movieNm} </td>
                  <td>{numeral(movie.salesAmt).format('0,0')} 원</td>
                  <td>{numeral(movie.audiCnt).format('0,0')}명</td>
                  <td>{movie.salesShare}</td>
               </tr>  
            </>
        );
    }
}

export default MoviesItem;