import React, { Component } from 'react';
export const BlogContext = React.createContext({});

export default class BlogProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogTitle: 'Start Bootstrap',
            homeTitle: 'Clean Blog',
            homeTagline: 'A Blog Theme by Start Bootstrap',
            posts: [
                {
                    id: 'post_1',
                    title:
                        'Man must explore, and this is exploration at its greatest',
                    subtitle: 'Problems look mighty small from 150 miles up',
                    author: 'Start Bootstrap',
                    date: 'September 24, 2018'
                },
                {
                    id: 'post_2',
                    title:
                        "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
                    subtitle: '',
                    author: 'Start Bootstrap',
                    date: 'September 18, 2018'
                },
                {
                    id: 'post_3',
                    title: 'Science has not yet mastered prophecy',
                    subtitle:
                        'We predict too much for the next year and yet far too little for the next ten.',
                    author: 'Start Bootstrap',
                    date: 'August 24, 2018'
                },
                {
                    id: 'post_4',
                    title: 'Failure is not an option',
                    subtitle:
                        'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
                    author: 'Start Bootstrap',
                    date: 'July 8, 2018'
                }
            ]
        };
    }

    render() {
        return (
            <BlogContext.Provider value={this.state}>
                {this.props.children}
            </BlogContext.Provider>
        );
    }
}
