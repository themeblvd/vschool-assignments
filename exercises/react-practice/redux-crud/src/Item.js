import React from "react";

const Item = props => {
    const { nickname, imgURL, handleClick, index } = props;
    return (
        <li>
            <h2>{nickname}</h2>
            <img src={imgURL} alt="" />
            <button onClick={() => handleClick(index)}>Remove</button>
        </li>
    );
};

export default Item;
