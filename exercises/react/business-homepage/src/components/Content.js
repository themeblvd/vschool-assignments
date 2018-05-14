import React, { Component } from 'react';
import Box from './Box';

class Content extends Component {

    render() {
        return (
            <section className="app-content">
                <div className="wrap">
                    <div className="intro">
                        <h3>Built with Basic React Tools</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="box-row">
                        <Box title="Create React App" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                        <Box title="Components" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                        <Box title="Styles" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
