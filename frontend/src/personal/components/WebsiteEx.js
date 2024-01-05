import React from 'react';
import { useEffect, useState } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import noWeb from "../../assets/personal-assets/noWeb.jpg"
import LoadingIcon from '../../shared/components/uiElements/LoadingIcon';
import { useHttpClient } from '../../shared/hooks/http-hook';
import "./WebsiteEx.css";


const WebsiteEx = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    // Use useState hook to manage websiteLinkDATA
    const [websiteLinkDATA, setWebsiteLinkData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await sendRequest(
                    'http://localhost:5000/api/admin/websitesUp'
                );
                setWebsiteLinkData(data);
            } catch (err) {
                // Handle error if needed
            }
        }

        fetchData();
    }, [])


    let content;

    if (isLoading) {
        content = <LoadingIcon />
    }

    if (websiteLinkDATA.length > 0) {
        content = (
            <ul className="website-ex">
                {websiteLinkDATA.map(webItem => {
                    return (
                        <li key={webItem.website_link}>
                            <FaDotCircle />
                            <Link
                                to={webItem.website_link}
                                className="website-name"
                                target="_blank" rel="noopener noreferrer"
                            >
                                {webItem.website_name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        content = (
            <div className="no-website-ex">
                <img src={noWeb} alt="noWeb" />
                <h2>Websites link fetching is under development! Try again in some days.</h2>
            </div>
        );
    }

    return (
        <div className="website-ex-section">
            <div className="website-ex-header">
                Websites I build .
            </div>
            <>
                {content}
            </>
        </div>
    )
}

export default WebsiteEx
