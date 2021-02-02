import React from 'react';
import "./loading.scss";

const Loading = () => {
    return (
        <div className="loading">
            <svg className="loading__svg">
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <span>Loading...</span>
        </div>
    );
};

export default Loading;