import React, { Component } from 'react';

import hero from '../assets/img/hero.jpg';

class Hero extends Component {
    render() {
        return (
            <section className="app-hero">
                <div className="hero-content">
                    <h2>A Homepage Made With React</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img src={hero} />
            </section>
        );
    }
}

export default Hero;
