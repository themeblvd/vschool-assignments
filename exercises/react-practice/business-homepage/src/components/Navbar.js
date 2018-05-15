import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="app-nav">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
