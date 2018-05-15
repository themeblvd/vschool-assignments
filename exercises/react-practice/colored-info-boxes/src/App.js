import React, { Component } from 'react';
import Boxes from './Boxes';

import './App.css';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>Colored Info Boxes</h1>
                <Boxes />
            </div>
        );
    }
}
