import React, { useState } from 'react';
import { Input, TextArea } from '../../shared/components/forms/Input';
import Button from '../../shared/components/forms/Button';
import { IoMdCloseCircle } from "react-icons/io";
import LoadingIcon from '../../shared/components/uiElements/LoadingIcon';
import "./BasicForm.css";

const Basic = ({ onSubmit,error, isLoading, ...props }) => {

  const [tags, setTags] = useState(props.tags || []);
  const [webLinkTags, setWebLinkTags] = useState(props.webLinkTags || []);

  const removeTag = (index, arrayType) => {
    if (arrayType === 'tags') {
      const updatedTags = tags.filter((_, idx) => idx !== index);
      setTags(updatedTags);
    } else if (arrayType === 'webLinkTags') {
      const updatedWebLinkTags = webLinkTags.filter((_, idx) => idx !== index);
      setWebLinkTags(updatedWebLinkTags);
    }
  };

  const addTag = (value, arrayType) => {
    if (value.trim() !== "") {
      if (arrayType === 'tags') {
        const updatedTags = [...tags, value];
        setTags(updatedTags);
        props.selectedTags(updatedTags);
      } else if (arrayType === 'webLinkTags') {
        const updatedWebLinkTags = [...webLinkTags, value];
        setWebLinkTags(updatedWebLinkTags);
        props.selectedWebLinkTags(updatedWebLinkTags);
      }
    }
  };

  const handleKeyUp = (event, arrayType) => {
    if (event.key === " ") {
      addTag(event.target.value, arrayType);
      event.target.value = "";
    }
  };

  const handleBlur = (event, arrayType) => {
    addTag(event.target.value, arrayType);
    event.target.value = "";
  };

  return (
    <>
      <form className="basic-form-section" onSubmit={onSubmit}>

        <div className="basic-form-input basic-form-name">
          <Input
            type="text"
            name="name"
            placeholder='Enter your legal name.'
            required={true}
          />
        </div>

        <div className="basic-form-input basic-form-email">
          <Input
            type="email"
            name="email"
            placeholder='Enter your official email.'
            id="basic-email"
            required={true}
          />
        </div>

        <div className="basic-form-fields">
          <div className="fields-tag">
            {tags.map((tag, index) => (
              <li key={index} className="basic-tag">
                <span className='basic-tag-title'>{tag}</span>
                <span className='basic-tag-close-icon' onClick={() => removeTag(index, 'tags')}>
                  <IoMdCloseCircle />
                </span>
              </li>
            ))}
          </div>
          <div className="basic-form-input fields-tag-input">
            <Input
              type="text"
              placeholder='Fields/tags to describe websites.'
              onKeyUp={event => handleKeyUp(event, 'tags')}
              onBlur={event => handleBlur(event, 'tags')}
            />
          </div>
        </div>

        <div className="basic-form-input basic-telegramId " >
          <Input
          id="basic-telegramId"
            type="text"
            name="telegramId"
            placeholder='Telegram Id (msg/calling purpose)'
            required={true}
          />
        </div>

        <div className="basic-form-input basic-form-outlook">
          <TextArea
            type="text"
            name="outlook"
            placeholder="Write how you imagine your website to look like."
            required={true}
          />
        </div>

        <div className="basic-form-input basic-form-audience">
          <TextArea
            type="text"
            name="targetAudience"
            placeholder="Audiences your website want to target. (Ex: age group, people product needs etc.)"
            required={true}
          />
        </div>

        <div className="basic-form-fields basic-form-exampleWebLink">
          <div className="fields-tag">
            {webLinkTags.map((webLinkTag, index) => (
              <li key={index} className="basic-tag">
                <span className='basic-tag-title' id='weblinktag'>{webLinkTag}</span>
                <span className='basic-tag-close-icon' onClick={() => removeTag(index, 'webLinkTags')}>
                  <IoMdCloseCircle />
                </span>
              </li>
            ))}
          </div>
          <div className="basic-form-input">
            <Input
              type="text"
              placeholder='Example Website Links (if any).'
              id="basic-exampleWebLink"
              onKeyUp={event => handleKeyUp(event, 'webLinkTags')}
              onBlur={event => handleBlur(event, 'webLinkTags')}
            />
          </div>
        </div>

        <div className="basic-form-input basic-contentGoogleDriveLink " >
          <TextArea
            type="text"
            name="contentGoogleDrive"
            placeholder='Google drive link (if any), which contains content that you want to put in your websites.'
          />
        </div>
        {error && <div className="basic-error-info">*// {error}</div> }        
        <Button type="Submit" id="basic-form-submit">{isLoading? <LoadingIcon/>: "Submit"}</Button>
      </form>
    </>
  )
}

export default Basic
