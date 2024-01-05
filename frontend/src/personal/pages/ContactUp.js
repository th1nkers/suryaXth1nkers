import React, { useEffect } from 'react';
import "../components/WebsiteEx.css";
import "./ContactUp.css";

import ContactUpForm from '../components/ContactUpForm';
import MainCard from '../../shared/components/uiElements/MainCard';
import Profile from '../components/Profile';

const ContactUp = () => {

    useEffect(() => {
        document.title = "th1nkers: CONTACT ME!";
        return () => {
          document.title = "th1nkers";
        };
      }, []);

    return (
        <MainCard className="personal-home-section">
            <ContactUpForm />
            <Profile />
        </MainCard>
    )
}

export default ContactUp
