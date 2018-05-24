import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { removeItem } from "./redux/";

const List = props => {
    const { items, removeItem } = props;
    return (
        <ul>
            {items.map((item, i) => {
                return (
                    <Item
                        key={`item-${i}`}
                        index={i}
                        handleClick={removeItem}
                        {...item}
                    />
                );
            })}
        </ul>
    );
};

export default connect(state => ({ items: state }), { removeItem })(List);
