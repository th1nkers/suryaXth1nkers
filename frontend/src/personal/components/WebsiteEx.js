import React from 'react';
import { Link } from 'react-router-dom';
import noWeb from "../../assets/personal-assets/noWeb.jpg";
import 'react-tooltip/dist/react-tooltip.css'
import { FaRegDotCircle } from "react-icons/fa";
import "./WebsiteEx.css";

const WebsiteEx = ({ websiteData }) => {
    let content;

    if (websiteData.length > 0) {
        content = (
            websiteData.map(webItem => {
                return (
                    <li className="website-ex-list" key={webItem.link}>
                        <Link
                            to={webItem.link}
                            className="website-name"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>
                                <FaRegDotCircle /> {" "}
                                {webItem.header}
                            </h4>
                        </Link>
                        <p>{webItem.detail}</p>
                    </li>
                )
            })
        )
    } else {
        content = (
            <>
                <img src={noWeb} alt="noWeb" />
                <h2>Websites link fetching is under development! Try again in some days.</h2>
            </>
        );
    }

    return (
        <div className="website-ex-section">
            <div className="website-ex-header">
                Websites Experiences
            </div>
            <ul className={websiteData.length > 0 ? "website-ex" : "no-website-ex"}>
                {content}
            </ul>
        </div>
    )
}

export default WebsiteEx
