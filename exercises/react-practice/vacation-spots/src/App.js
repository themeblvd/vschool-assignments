import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import Card from './components/card';

const vacationSpots = [
    {
        place: 'Meridian, Idaho',
        price: 40,
        timeToGo: 'Spring'
    },
    {
        place: 'Cancun',
        price: 900,
        timeToGo: 'Winter'
    },
    {
        place: 'China',
        price: 1200,
        timeToGo: 'Fall'
    },
    {
        place: 'Russia',
        price: 1100,
        timeToGo: 'Summer'
    },
    {
        place: 'Lebanon',
        price: 400,
        timeToGo: 'Spring'
    }
];

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <h1>Vacation Spots Using Props and Map</h1>
                </header>
                {vacationSpots.map(spot => (
                    <Card
                        place={spot.place}
                        price={spot.price}
                        timeToGo={spot.timeToGo}
                    />
                ))}
            </div>
        );
    }
}
