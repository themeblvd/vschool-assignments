import React from 'react';
import Badge from './Badge';

const Badges = props => {
    var badges;

    if (props.data.length) {
        badges = props.data.map(badge => {
            return <Badge {...badge} />;
        });

        badges = <div className="badges">{badges}</div>;
    } else {
        badges = <div className="no-badges">Add some badges!</div>;
    }

    return badges;
};

export default Badges;
