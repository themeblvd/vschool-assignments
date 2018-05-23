import React from 'react';

const Badge = ({
    firstName,
    lastName,
    phone,
    birthplace,
    favFood,
    email,
    bio
}) => {
    return (
        <div className="badge">
            <ul>
                <li className="name">
                    <strong>Name:</strong> {firstName} {lastName}
                </li>
                <li className="phone">
                    <strong>Phone:</strong> {phone}
                </li>
                <li className="birthplace">
                    <strong>Place of Birth:</strong> {birthplace}
                </li>
                <li className="fav-food">
                    <strong>Favorite Food:</strong> {favFood}
                </li>
                <li className="email">
                    <strong>Email:</strong> {email}
                </li>
                <li className="email">{bio}</li>
            </ul>
        </div>
    );
};

export default Badge;
