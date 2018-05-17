import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class BlogPost extends Component {
    render() {
        return (
            <div className="components-blog-post">
                <a href="#" title={this.props.title}>
                    <h1 className="post-title">{this.props.title}</h1>
                    <h2 className="post-subtitle">{this.props.subtitle}</h2>
                </a>
                <p className="post-meta">
                    Post by <a href="#">{this.props.author}</a> on{' '}
                    <a href="#">{this.props.date}</a>
                </p>
            </div>
        );
    }
}

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};
