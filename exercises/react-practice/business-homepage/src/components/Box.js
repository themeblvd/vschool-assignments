import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="box">
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default Box;
