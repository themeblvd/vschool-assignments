import React, { Component } from 'react';

import logo from '../assets/img/logo.svg';

class Logo extends Component {
    render() {
        return (
            <div className="app-logo">
                <img src={logo} className="app-logo" alt="logo" />
                <h1>React Site</h1>
            </div>
        );
    }
}

export default Logo;
