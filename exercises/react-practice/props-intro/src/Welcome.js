import React from 'react';

const Welcome = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p><strong>Email:</strong> {props.email}</p>
            <p><strong>Phone:</strong> {props.phone}</p>
        </div>
    );
};

export default Welcome;
