import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./redux/";

class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                nickname: "",
                imgURL: ""
            }
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            };
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.inputs);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-form">
                <p>
                    Nickname: <br />
                    <input
                        name="nickname"
                        type="text"
                        value={this.state.inputs.nickname}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    Image: <br />
                    <input
                        name="imgURL"
                        type="text"
                        value={this.state.inputs.imgURL}
                        onChange={this.handleChange}
                    />
                </p>
                <button>Add Item</button>
            </form>
        );
    }
}

export default connect(null, { addItem })(AddForm);
