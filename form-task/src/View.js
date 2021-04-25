import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div className="results">
            <h3>This is your input:</h3>
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Phone number:{props.phone}</p>
            <p>Role: {props.role}</p>
            <p>Message: {props.message}</p>
        </div>
    );
};

export default View;