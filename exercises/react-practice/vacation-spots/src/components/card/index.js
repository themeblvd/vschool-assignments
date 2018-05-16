import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Card extends Component {
    render(props) {
        return (
            <ul className="components-card">
                <li>
                    <strong>Place:</strong> {this.props.place}
                </li>
                <li>
                    <strong>Price:</strong> {this.props.price}
                </li>
                <li>
                    <strong>Time to Go:</strong> {this.props.timeToGo}
                </li>
            </ul>
        );
    }
}

Card.propTypes = {
    place: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    timeToGo: PropTypes.string.isRequired
};
