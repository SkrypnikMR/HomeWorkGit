import React, { Component } from 'react';
import Header from '../Header';
import Content from '../Content';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="app">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/'><Content/></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;

