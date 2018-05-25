import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/css/frontstreet-core.css';
import './assets/scss/main.scss'; // Must come before components.
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import store from './store';

const App = () => {
    return (
        <div className="app">
            <ContactForm />
            <Contacts />
        </div>
    );
};

export default App;
