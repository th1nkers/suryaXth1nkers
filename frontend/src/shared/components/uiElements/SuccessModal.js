import React from 'react';
import ReactDOM from 'react-dom';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group';
import './SuccessModal.css';

const SuccessModal = (props) => {
    const ModalOverlay = (props) => {
        const content = (
            <div className='success-modal'>
                <IoCheckmarkDoneCircle />
                <h2 style={props.style}>
                    Submitted!
                </h2>
            </div>
        );
        return ReactDOM.createPortal(content, document.getElementById('success-modal-hook'));
    };

    return (
        <CSSTransition
            in={props.show}
            timeout={800}
            classNames="slide"
            mountOnEnter
            unmountOnExit
        >
            <ModalOverlay {...props} />
        </CSSTransition>
    );
};

export default SuccessModal;
