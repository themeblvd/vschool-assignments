import React, { Component } from 'react';

const BadgeForm = props => {
    return (
        <form className="badge-form" onSubmit={props.handleSubmit}>
            <h2>Add a Badge</h2>
            <div className="row">
                <p className="col col-md-6">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        value={props.firstName}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
                <p className="col col-md-6">
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        value={props.lastName}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
            </div>
            <div className="row">
                <p className="col col-md-6">
                    <label>Email</label>
                    <input
                        name="email"
                        value={props.email}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
                <p className="col col-md-6">
                    <label>Phone</label>
                    <input
                        name="phone"
                        value={props.phone}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
            </div>
            <div className="row">
                <p className="col col-md-6">
                    <label>Birthplace</label>
                    <input
                        name="birthplace"
                        value={props.birthplace}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
                <p className="col col-md-6">
                    <label>Favorite Food</label>
                    <input
                        name="favFood"
                        value={props.favFood}
                        type="text"
                        onChange={props.handleChange}
                    />
                </p>
            </div>
            <p>
                <label>Bio</label>
                <textarea
                    name="bio"
                    value={props.bio}
                    rows="10"
                    onChange={props.handleChange}
                />
            </p>
            <p>
                <button className="btn">Add Badge</button>
            </p>
        </form>
    );
};

export default BadgeForm;
