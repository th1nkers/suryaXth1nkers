import React from 'react';
import "./MainCard.css";

const MainCard = ({ children, className }) => {
    return (
        <div className={`main-card-section ${className} `}>
            {children}
        </div>
    )
}

export default MainCard
