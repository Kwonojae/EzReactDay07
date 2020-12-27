import React, { Component } from 'react';
import './Modal.scss'
import { AiOutlineClose } from "react-icons/ai";

class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                <div className="bg"></div>
                <div className="popup">
                   <img src="" alt=""/>
                   <h2>제목</h2> 
                   <p className="close">
                       <AiOutlineClose />
                   </p>
                </div>

            </div>
        );
    }
}

export default Modal;