import React from 'react';
import { Link } from 'react-router-dom';
import dp from "../../assets/personal-assets/dp.jpg";
import docs from "../../assets/personal-assets/docs.png";
import x from "../../assets/personal-assets/x.png";
import linkedIn from "../../assets/personal-assets/linkedIn.png";
import github from "../../assets/personal-assets/github.png";
import ResumeDetail from "../../assets/personal-assets/ResumeDetail+.pdf";
import "./Profile.css";

const Profile = ({ profileData }) => {

    const {profile} = profileData;

    return (
        <div className="profile-detail-section">
            <div className="photo-and-connect">
                <div className="photo-profile-section">
                    <img src={dp} alt={profile.name} />
                </div>
                <ul className="connect-profile-section">
                    <li className="profile-link">
                        <Link
                            to="https://github.com/th1nkers"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={github} alt="xIcon" />
                        </Link>
                    </li>
                    <li className="profile-link">
                        <Link
                            to="https://www.linkedin.com/in/suryaxth1nkers"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={linkedIn} alt="xIcon" />
                        </Link>
                    </li>
                    <li className="profile-link" >
                        <Link
                            to="https://twitter.com/suryaXth1nkers"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={x} alt="xIcon" />
                        </Link>
                    </li>
                    <li className="profile-link" >
                        <Link to={ResumeDetail}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={docs} alt="resume-icon" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="profile-detail">
                <h1>{profile.name}</h1>
                <p>{profile.info}</p>
            </div>
        </div>
    )
}

export default Profile
