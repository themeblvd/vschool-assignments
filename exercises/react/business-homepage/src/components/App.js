import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Hero />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;
