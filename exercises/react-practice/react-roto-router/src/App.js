import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/scss/main.scss'; // Must come before components.
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        const location = this.props.location.pathname;

        return (
            <div className="app">
                <Header />
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={this.props.location.pathname}
                        classNames="slide"
                        timeout={400}
                    >
                        <Switch location={this.props.location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/services" component={Services} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default App;
