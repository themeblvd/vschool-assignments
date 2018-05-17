import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import SuperHero from './components/super-hero';
import data from './data.json';

export default class App extends Component {
    sayCatchphrase = (event, catchphrase) => {
        event.preventDefault();
        alert(catchphrase);
    };

    render() {
        return (
            <div className="app">
                <h1>Super Heroes</h1>
                <p>Click a super hero to find out their catchphrase.</p>
                <section className="super-heroes">
                    {data.heroes.map((hero, i) => {
                        return (
                            <SuperHero
                                key={`hero-${i}`}
                                name={hero.name}
                                avatar={hero.avatar}
                                catchphrase={hero.catchphrase}
                                clickHandler={this.sayCatchphrase}
                            />
                        );
                    })}
                </section>
            </div>
        );
    }
}
