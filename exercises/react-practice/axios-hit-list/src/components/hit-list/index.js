import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const HitList = props => {
    return (
        <ul className="hit-list">
            {props.people.map(person => {
                return (
                    <li>
                        <div
                            class="person"
                            style={{
                                backgroundImage: `url(${person.image})`
                            }}
                        >
                            <h2>{person.name}</h2>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

HitList.propTypes = {
    data: PropTypes.array
};

HitList.defaultProps = {
    data: []
};

export default HitList;
