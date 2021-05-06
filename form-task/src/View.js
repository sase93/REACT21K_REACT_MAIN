import React from 'react';
import './View.css';

const View = ({firstname, lastname, phone, role, message}) => {
    return (
        <div className="results">
            <h3>These are your inputs</h3>
            <p>First name: {firstname}</p>
            <p>Last name: {lastname}</p>
            <p>Phone number: {phone}</p>
            <p>Role: {role}</p>
            <p>Message: {message}</p>
        </div>
    );
};

export default View;