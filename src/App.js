import React/*, { useState } */ from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="App_pages">
                    <div className="App_vertical"></div>
                    <h4>Home</h4>
                </div>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;