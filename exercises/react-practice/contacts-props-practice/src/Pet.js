import React, { Component } from 'react';

export default class Pet extends Component {
    render() {
        return (
            <div className="pet">
                {this.props.name.toUpperCase()} is a {this.props.breed}.
            </div>
        );
    }
}
