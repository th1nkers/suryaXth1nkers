import React from 'react';
import LoadingSvg from '../../../assets/shared/LoadingIcon.svg';

const LoadingIcon = ({error}) => {
    return (
        <div className="center">
            {error ? <h4 id='loading-error'>{error}</h4> : <img src={LoadingSvg} alt="loading..." />}
        </div>
    )
}

export default LoadingIcon;