import React, { Component } from 'react';
import './MoviesView.scss'

class MoviesView extends Component {
    render() {
        const {movieItem} = this.props
        return (
            <div className="MoviesView">
                <p>
                 <img src={movieItem.thumbUrl} alt=""/>
                </p>
                <div>
                    <h3>{movieItem.movieNm}</h3>
                    <ul>
                        <li><span>개봉일</span> : {movieItem.openDt} </li>
                        <li><span>제작상태</span> : {movieItem.moviePrdtStat} </li>
                        <li><span>영화구분</span> : {movieItem.movieType} </li>
                        <li><span>관람등급</span> : {movieItem.watchGradeNm} </li>
                        <li><span>상영시간</span> : {movieItem.showTs}분 </li>
                        <li><span>관객수</span> : {movieItem.audiCnt} 명 </li>
                        <li><span>제작국가</span> : {movieItem.repNationCd} </li>
                        <li><span>감독</span> : {movieItem.director} </li>
                        <li><span>배급사</span> : {movieItem.dtNm} </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MoviesView;
/*
개봉일 : openDt
제작상태 :moviePrdtStat
영화구분:movieType
관람등급: watchGradeNm
상영시간 :showTs
제작국가:repNationCd
감독:director
장르:genre
배급사: dtNm
영화명 :movieNm
매출액:salesAmt
관객수:audiCnt
증감율: salesShare

*/