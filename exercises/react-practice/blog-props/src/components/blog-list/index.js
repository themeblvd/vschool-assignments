import React, { Component } from 'react';
import BlogPost from '../blog-post';
import { BlogContext } from '../../contexts/BlogContext';

import './style.scss';

export default class BlogList extends Component {
    get posts() {
        return (
            <BlogContext.Consumer>
                {data => {
                    return data.posts.map(post => {
                        return (
                            <BlogPost
                                key={post.id}
                                title={post.title}
                                subtitle={post.subtitle}
                                author={post.author}
                                date={post.date}
                            />
                        );
                    });
                }}
            </BlogContext.Consumer>
        );
    }

    render() {
        return (
            <div className="components-blog-list">
                <div className="wrap">
                    <div className="blog-list">{this.posts}</div>
                    <a href="#" className="button">
                        Older Posts →
                    </a>
                </div>
            </div>
        );
    }
}
