import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class SuperHero extends Component {
    render() {
        return (
            <div
                className="components-super-hero"
                onClick={event =>
                    this.props.clickHandler(event, this.props.catchphrase)
                }
            >
                <h2>{this.props.name}</h2>
                <img src={this.props.avatar} alt={this.props.name} />
            </div>
        );
    }
}

SuperHero.SuperHero = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired
};
