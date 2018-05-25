import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../store';

class Contact extends Component {
    handleRemove = event => {
        event.preventDefault();
        this.props.removeContact(event.target.dataset.id);
    };

    render() {
        const { name, email, phone, id } = this.props;

        return (
            <ul className="contact">
                <li className="name">
                    <strong>Name:</strong> {name}
                </li>
                <li className="phone">
                    <strong>Phone:</strong> {phone}
                </li>
                <li className="email">
                    <strong>Email:</strong> {email}
                </li>
                <li>
                    <button
                        className="btn btn-xs"
                        onClick={this.handleRemove}
                        data-id={id}
                    >
                        Remove
                    </button>
                </li>
            </ul>
        );
    }
}

export default connect(null, { removeContact })(Contact);
