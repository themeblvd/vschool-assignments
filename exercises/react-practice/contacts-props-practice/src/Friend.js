import React, { Component } from 'react';
import Pet from './Pet';

export default class Friend extends Component {
    render() {
        return (
            <li className="friend">
                <ul>
                    <li><strong>Name:</strong> {this.props.name}</li>
                    <li><strong>Age:</strong> {this.props.age}</li>
                    <li>
                        <ul>
                            {this.props.pets.map( (pet, i) => <Pet key={i} name={pet.name} breed={pet.breed} />)}
                        </ul>
                    </li>
                </ul>
            </li>
        );
    }
}
