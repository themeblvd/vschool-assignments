import React, { Component } from 'react';
import './style.scss';

const Form = props => {
    return (
        <form className="components-form" onSubmit={props.handleSubmit}>
            <p>
                <label>Name:</label>
                <input
                    name="name"
                    value={props.value}
                    onChange={props.handleChange}
                />
            </p>
            <button>Add Name</button>
        </form>
    );
};

export default Form;
