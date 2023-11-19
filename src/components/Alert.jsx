import React from 'react';

const Alert = ({ type }) => {
    return (
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div
                className={`${
                    type === 'danger' ? 'bg-red-500' : 'bg-blue-800'
                }`}></div>
        </div>
    );
};

export default Alert;
