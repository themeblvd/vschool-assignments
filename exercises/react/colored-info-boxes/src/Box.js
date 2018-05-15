import React, { Component } from 'react';

export default class Box extends Component {
    render() {

        var style = {
            backgroundColor: this.props.color
        };

        return (
            <div className="box" style={style}>
                <span className="info">
                    <span className="hex">{this.props.color}</span>
                    <span className="desc">{this.props.title} ({this.props.subtitle})</span>
                </span>
            </div>
        );
    }
}
