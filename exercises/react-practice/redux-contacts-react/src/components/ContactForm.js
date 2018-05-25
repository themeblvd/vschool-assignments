import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../store';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: '',
                email: '',
                phone: ''
            }
        };
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            };
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        var contact = {
            id:
                '_' +
                Math.random()
                    .toString(36)
                    .substr(2, 9),
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value
        };

        this.props.addContact(contact);

        this.setState({
            inputs: {
                name: '',
                email: '',
                phone: ''
            }
        });
    };

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <h2>Add a Contact</h2>
                <p>
                    <label>Name</label>
                    <input
                        className="field-sm"
                        name="name"
                        value={this.state.inputs.name}
                        type="text"
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <label>Email</label>
                    <input
                        className="field-sm"
                        name="email"
                        value={this.state.inputs.email}
                        type="text"
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <label>Phone</label>
                    <input
                        className="field-sm"
                        name="phone"
                        value={this.state.inputs.phone}
                        type="text"
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <button className="btn btn-sm">Add Contact</button>
                </p>
            </form>
        );
    }
}

export default connect(null, { addContact })(ContactForm);
