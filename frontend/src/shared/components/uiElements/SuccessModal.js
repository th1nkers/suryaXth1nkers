import React, { useEffect } from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { ModalContext } from '../../context/modal-context';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import './SuccessModal.css';

const SuccessModal = (props) => {

    const modal = useContext(ModalContext);

    useEffect(() => {
        if (modal.showSuccessModal) {
            modal.showModalHandler(true);
            setTimeout(() => {
                modal.showModalHandler(false);
                // props.onCancel();
            }, 5000); // 3 seconds
        }
    }, [modal, props.onCancel]);

    const ModalOverlay = (props) => {
        const content = (
            <div className='success-modal'>
                <h2 style={props.style}>
                    Submitted!
                </h2>
                <IoCheckmarkDoneCircle />
            </div>
        )


        return ReactDOM.createPortal(content, document.getElementById('success-modal-hook'));
    }

    return (
        <CSSTransition
            in={modal.showSuccessModal}
            mountOnEnter
            unmountOnExit
            timeout={500}
            classNames={{
                enter: 'success-modal-enter',
                exit: 'success-modal-exit',
            }}
        >
            <ModalOverlay {...props} />
        </CSSTransition>

    )
}

export default SuccessModal