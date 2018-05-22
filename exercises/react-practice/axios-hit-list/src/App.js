import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import axios from 'axios';
import HitList from './components/hit-list';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({ data: response.data });
        });
    }

    render() {
        return (
            <div className="app">
                <header>
                    <h1>Don's Corleone's Hit List</h1>
                </header>
                <HitList people={this.state.data} />
            </div>
        );
    }
}

export default App;
