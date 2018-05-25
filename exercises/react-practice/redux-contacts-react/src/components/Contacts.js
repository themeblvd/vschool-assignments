import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';

const Contacts = props => {
    if (props.contacts.length) {
        return (
            <div className="contacts">
                {props.contacts.map(contact => {
                    return <Contact key={contact.id} {...contact} />;
                })}
            </div>
        );
    } else {
        return <div className="no-contacts">Add some contacts!</div>;
    }
};

export default connect(state => ({ contacts: state.contacts }))(Contacts);
