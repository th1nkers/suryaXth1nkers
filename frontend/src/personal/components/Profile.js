import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css";
import dp from "../../assets/personal-assets/dp.jpg";
import x from "../../assets/personal-assets/x.png";
import linkedIn from "../../assets/personal-assets/linkedIn.png";
import github from "../../assets/personal-assets/github.png";

const Profile = () => {
    return (
        <div className="profile-detail-section">
            <div className="photo-and-connect">
                <div className="photo-profile-section">
                    <img src={dp} alt="dp" />
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
                    <li className="x-link" >
                        <Link
                            to="https://twitter.com/suryaXth1nkers"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img src={x} alt="xIcon" />
                        </Link>
                    </li>
                    {/* <li className="connect-link">Connect</li> */}
                </ul>
            </div>
            <div className="profile-detail">
                <h1>Suryansh Singh</h1>
                <p>MERN | Full Web Stack: HTML, CSS, JS, ReactJs, NodeJs, ExpressJs, MongoDB, Socket.io, NextJs, GraphQL, my-SQL based database (noSQL), and continue learning. </p>
            </div>
        </div>
    )
}

export default Profile
