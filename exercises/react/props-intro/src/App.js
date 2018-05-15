import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Welcome
                    name="John"
                    email="john@foo.com"
                    phone="907-123-4567"
                />
                <Welcome
                    name="Tom"
                    email="tom@foo.com"
                    phone="907-123-4567"
                />
                <Welcome
                    name="Mark"
                    email="mark@foo.com"
                    phone="907-123-4567"
                />
            </div>
        );
    }
}

export default App;
