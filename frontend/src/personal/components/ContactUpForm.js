import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Button from '../../shared/components/forms/Button';
import { Input, TextArea } from '../../shared/components/forms/Input';
import LoadingIcon from '../../shared/components/uiElements/LoadingIcon';
import Modal from '../../shared/components/uiElements/Modal';
import { FaArrowLeft } from "react-icons/fa6";
import './ContactUpForm.css';
import { useContext } from 'react';
import { ModalContext } from '../../shared/context/modal-context';

const ContactUpForm = () => {

    const modal = useContext(ModalContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});

    const { isLoading, error, sendRequest, clearError } = useHttpClient();


    const submitHandler = async (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());

        const formattedData = {
            name: data.name,
            email: data.email,
            reason: data.reason,
        };

        setFormData(formattedData);
        setShowModal(true);
    };

    const okayModalHandler = async () => {
        setShowModal(false);
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_BACKEND_URL} + '/users/contactup'`,
                'POST',
                JSON.stringify(formData),
                {
                    'Content-Type': 'application/json'
                }
            );

            console.log("data:", responseData);

            modal.showModalHandler(true);

            navigate('/');

        } catch (err) {
            // Handle error if needed
        }
    };

    const onCancelModalHandler = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal
                className="modal-contactUp"
                header="Review your info and confirm for submission."
                show={showModal}
                onCancel={onCancelModalHandler}
                clearModalFooter={<button onClick={onCancelModalHandler} id="modal-back"> <FaArrowLeft /> Back</button>}
                footer={<Button onClick={okayModalHandler}>Confirm</Button>}
            >
                {formData && Object.keys(formData).length > 0 && (
                    <div className='modal-para'>
                        {Object.entries(formData).map(([key, value]) => (
                            <p key={key}><strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}</p>
                        ))}
                    </div>
                )}
            </Modal>

            <div className="website-ex-section">
                <div className="website-ex-header">
                    Connect With Me.
                </div>
                <form className="contact-form-section" onSubmit={submitHandler}>
                    <div className="contact-input">
                        <Input label="Name:" id="name" type="text" name="name" required />
                    </div>
                    <div className="contact-input">
                        <Input label="Email:" id="email" type="email" name="email" required />
                    </div>
                    <div className="contact-input">
                        <TextArea label="Reason:" name="reason" id="reason" type="text" required />
                    </div>
                    <div className="contact-submit">
                        {error && <div className="basic-error-info">*// {error}</div>}
                        <Button type='submit'>{isLoading ? <LoadingIcon /> : "Send"}</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUpForm;
