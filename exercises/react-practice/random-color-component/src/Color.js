import React from 'react';
import PropTypes from 'prop-types';

const Color = props => {
    var hex = props.hex ? props.hex : '000000';

    return (
        <li style={{ backgroundColor: `#${hex}` }}>
            <span>{`#${hex}`}</span>
        </li>
    );
};

Color.propTypes = {
    hex: PropTypes.string.isRequired
};

Color.defaultProps = {
    hex: '#000000'
};

export default Color;
