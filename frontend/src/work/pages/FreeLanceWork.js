import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/components/forms/Button';
import MainCard from '../../shared/components/uiElements/MainCard';
import Modal from '../../shared/components/uiElements/Modal';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { FaArrowLeft } from "react-icons/fa6";
import BasicForm from '../components/BasicForm';
import "./FreeLanceWork.css";
import { useContext } from 'react';
import { ModalContext } from '../../shared/context/modal-context';

const FreeLanceWork = () => {

  const modal = useContext(ModalContext)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [fieldTags, setFieldTags] = useState([]);
  const [websiteLinkTags, setWebsiteLinkTags] = useState([]);

  const { isLoading, error, sendRequest } = useHttpClient();

  const selectedTags = tags => {
    setFieldTags(tags)
  };

  const selectedWebLinkTags = webLinkTags => {
    setWebsiteLinkTags(webLinkTags)
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    const formatedData = {
      name: data.name,
      email: data.email,
      field: fieldTags,
      outlook: data.outlook,
      exampleWebLink: websiteLinkTags,
      targetAudience: data.targetAudience,
      contentGoogleDrive: data.contentGoogleDrive,
      telegramId: data.telegramId,
    };

    setFormData(formatedData);
    setShowModal(true);
  };

  const okayModalHandler = async () => {
    setShowModal(false);

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/freelance-service/workup`,
        'POST',
        JSON.stringify(formData),
        {
          'Content-Type': 'application/json'
        }
      );

      modal.showModalHandler(true);
      navigate('/');
    } catch (err) { }

  };

  const onCancelModalHandler = () => {
    setShowModal(false);
  }

  return (
    <MainCard className="freelance-section">
      <Modal
        className="modal-freelance"
        header="Review your info and confirm for submission."
        show={showModal}
        onCancel={onCancelModalHandler}
        clearModalFooter={
          <button onClick={onCancelModalHandler} id="modal-back">
            <FaArrowLeft /> Back
          </button>
        }
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

      <BasicForm
        tags={[]}
        webLinkTags={[]}
        selectedTags={selectedTags}
        selectedWebLinkTags={selectedWebLinkTags}
        onSubmit={submitHandler}
        error={error}
        isLoading={isLoading}
      />

    </MainCard>
  )
}

export default FreeLanceWork
