import React, { Component } from 'react';
import Navbar from '../navbar';
import { BlogContext } from '../../contexts/BlogContext';
import './style.scss';

export default class Header extends Component {
    constructor() {
        super();
        this.state = { className: 'site-header' };
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        this.setState({
            className: window.scrollY > 10 ? 'site-header fill' : 'site-header'
        });
    };

    render() {
        return (
            <BlogContext.Consumer>
                {data => {
                    return (
                        <div className="components-header">
                            <header className={this.state.className}>
                                <div className="wrap">
                                    <a href="#" className="site-logo">
                                        {data.blogTitle}
                                    </a>
                                    <Navbar />
                                </div>
                            </header>
                            <div className="content">
                                <div className="wrap">
                                    <h1>{data.homeTitle}</h1>
                                    <span className="tagline">
                                        {data.homeTagline}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </BlogContext.Consumer>
        );
    }
}
