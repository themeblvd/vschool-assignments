import React from 'react';
import './style.scss';

const List = props => {
    return (
        <ul>
            {props.names.map((name, i) => <li key={`name_${i}`}>{name}</li>)}
        </ul>
    );
};

export default List;
