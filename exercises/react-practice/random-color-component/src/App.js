import React, { Component } from 'react';
import axios from 'axios';
import './assets/scss/main.scss'; // Must come before components.
import Color from './Color';

class App extends Component {
    constructor() {
        super();
        this.state = {
            colors: []
        };
    }

    componentDidMount = () => {
        axios
            .get('http://www.colr.org/json/colors/random/12')
            .then(response => {
                this.setState({
                    colors: response.data.colors
                });
            });
    };

    render() {
        return (
            <div className="app">
                <header>
                    <h1>Random Colors</h1>
                </header>
                <ul className="color-list">
                    {this.state.colors.map((color, i) => {
                        return <Color key={`color-${i}`} hex={color.hex} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
