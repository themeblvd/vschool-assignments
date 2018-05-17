import React, { Component } from 'react';
import './style.scss';

export default class Navbar extends Component {
    render() {
        return (
            <ul className="components-navbar">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Sample Post</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        );
    }
}
