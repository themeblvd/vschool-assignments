import React, { Component } from 'react';
import './assets/css/frontstreet-core.css';
import './assets/scss/main.scss'; // Must come before components.
import Badges from './components/Badges';
import BadgeForm from './components/BadgeForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                birthplace: '',
                favFood: '',
                email: '',
                bio: ''
            },
            badges: []
        };
    }

    handleInputChange = event => {
        event.persist();
        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [event.target.name]: event.target.value
                }
            };
        });
    };

    handleAddBadge = event => {
        event.preventDefault();

        var newBadge = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phone: event.target.phone.value,
            birthplace: event.target.birthplace.value,
            favFood: event.target.favFood.value,
            email: event.target.email.value,
            bio: event.target.bio.value
        };

        this.setState(prevState => ({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                birthplace: '',
                favFood: '',
                email: '',
                bio: ''
            },
            badges: [...prevState.badges, newBadge]
        }));
    };

    render() {
        return (
            <div className="app">
                <BadgeForm
                    handleChange={this.handleInputChange}
                    handleSubmit={this.handleAddBadge}
                    {...this.state.form}
                />
                <Badges data={this.state.badges} />
            </div>
        );
    }
}

export default App;
