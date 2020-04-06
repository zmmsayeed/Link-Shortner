import React, { Component } from 'react'
import { Switch, Redirect, Link, Route } from 'react-router-dom';

// importing components to render
import Dashboard from '../components/Dashboard';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default Main;
