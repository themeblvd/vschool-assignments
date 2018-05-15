import React, { Component } from 'react';
import Box from './Box';

export default class Boxes extends Component {

    boxes = [
        {
            color: "#1abc9c",
            title: "Turquoise",
            subtitle: "Green"
        },
        {
            color: "#16a085",
            title: "Green Sea",
            subtitle: "Green"
        },
        {
            color: "#2ecc71",
            title: "Emerald",
            subtitle: "Green"
        },
        {
            color: "#3498db",
            title: "Peter River",
            subtitle: "Blue"
        },
        {
            color: "#2980b9",
            title: "Belize Hole",
            subtitle: "Blue"
        },
        {
            color: "#9b59b6",
            title: "Amethyst",
            subtitle: "Purple"
        },
        {
            color: "#8e44ad",
            title: "Wisteria",
            subtitle: "Purple"
        },
        {
            color: "#34495e",
            title: "Wet Asphault",
            subtitle: "Grey"
        },
        {
            color: "#2c3e50",
            title: "Midnight Blue",
            subtitle: "Grey"
        },
        {
            color: "#f1c40f",
            title: "Sun Flower",
            subtitle: "Yellow"
        },
        {
            color: "#e67e22",
            title: "Carrot",
            subtitle: "Orange"
        },
        {
            color: "#e74c3c",
            title: "Alizarin",
            subtitle: "Red"
        }
    ];

    render() {
        return (
            <div className="boxes">
                {this.boxes.map( box => <Box key={box.color} color={box.color} title={box.title} subtitle={box.subtitle} />)}
            </div>
        );
    }
}
