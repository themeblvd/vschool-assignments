import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    addCount = () => {
        this.setState(prev => ({
            counter: prev.counter + 1
        }));
    };

    subtractCount = () => {
        this.setState(prev => ({
            counter: prev.counter - 1
        }));
    };

    render() {
        return (
            <div className="app">
                <div className="count">{this.state.counter}</div>
                <button onClick={this.addCount}>Add</button>
                <button onClick={this.subtractCount}>Minus</button>
            </div>
        );
    }
}
