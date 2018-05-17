import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import Header from './components/header';
import BlogList from './components/blog-list';
import Footer from './components/footer';
import BlogProvider from './contexts/BlogContext';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <BlogProvider>
                    <Header />
                    <BlogList />
                    <Footer />
                </BlogProvider>
            </div>
        );
    }
}
