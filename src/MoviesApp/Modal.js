import React, { Component } from 'react';
import './Modal.scss'
import { AiOutlineClose } from "react-icons/ai";

class Modal extends Component {
    render() {
        const {movieItem, onClose} = this.props
        return (
            <div className="Modal">
                <div className="bg" onClick={onClose}></div>
                <div className="popup">
                   <img src={movieItem.thumbUrl} alt=""/>
                   <h2>{movieItem.movieNm}</h2> 
                   <p className="close" onClick={onClose}>
                       <AiOutlineClose />
                   </p>
                </div>

            </div>
        );
    }
}

export default Modal;