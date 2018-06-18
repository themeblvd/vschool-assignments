import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import { connect } from 'react-redux';
import { getTodos } from './store';
import Todos from './components/Todos';

class App extends Component {
    componentDidMount() {
        this.props.getTodos();
        // console.log(this.props.todos);
    }

    render() {
        return (
            <div className="app">
                <header>
                    <h1>Todos</h1>
                </header>
                <Todos />
            </div>
        );
    }
}

export default connect(state => ({ todos: state }), { getTodos })(App);
