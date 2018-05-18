import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import Title from './components/title';
import List from './components/list';
import Form from './components/form';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentName: '',
            names: []
        };
    }

    handleChange = event => {
        this.setState({
            currentName: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        var newName = event.target.name.value;

        this.setState(prevState => ({
            currentName: '',
            names: [...prevState.names, newName]
        }));
    };

    render() {
        return (
            <div className="app">
                <Title name={this.state.currentName} />
                <List names={this.state.names} />
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={this.state.currentName}
                />
            </div>
        );
    }
}
