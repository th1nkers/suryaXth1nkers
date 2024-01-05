/* SuccessModal.jsx */
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../../context/modal-context';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { Transition } from 'react-transition-group';
import './SuccessModal.css';

const SuccessModal = (props) => {
    const modal = useContext(ModalContext);

    useEffect(() => {
        if (modal.showSuccessModal) {
            modal.showModalHandler(true);
            setTimeout(() => {
                modal.showModalHandler(false);
                // props.onCancel();
            }, 5000); // 5 seconds
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
        );

        return ReactDOM.createPortal(content, document.getElementById('success-modal-hook'));
    };

    return (
        <Transition
            in={modal.showSuccessModal}
            mountOnEnter
            unmountOnExit
            timeout={500}
        >
            {(state) => (
                <ModalOverlay style={{
                    transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                    transform: state === 'entered' ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: state === 'entered' ? 1 : 0,
                }} />
            )}
        </Transition>
    );
};

export default SuccessModal;
