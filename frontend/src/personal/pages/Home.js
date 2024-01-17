import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useHttpClient } from "../../shared/hooks/http-hook.js";
import Profile from "../components/Profile.js";
import WebsiteEx from "../components/WebsiteEx.js";
import MainCard from "../../shared/components/uiElements/MainCard.js";
import ContactUpForm from "../components/ContactUpForm.js";
import LoadingIcon from "../../shared/components/uiElements/LoadingIcon.js";
import "./Home.css";

const HomePage = () => {
    const location = useLocation();
    const { isLoading, error, sendRequest } = useHttpClient();
    const [fetchedPage, setFetchedPage] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/users")
                setFetchedPage(responseData);
            } catch (err) { }
        }

        fetchPage();
    }, [sendRequest])

    if (isLoading || !fetchedPage || fetchedPage.length === 0) {
        return (
            <LoadingIcon error={error}/>
        );
    }

    let content;

    if (location.pathname === "/contact-up") {
        content = <ContactUpForm />
    } else {
        content = <WebsiteEx websiteData={fetchedPage?.Home[0]?.websiteEx || []} />
    }

    return (
        <MainCard className="personal-home-section">
            {content}
            <Profile profileData={fetchedPage?.Home[1] || []} />
        </MainCard>
    )
}

export default HomePage
