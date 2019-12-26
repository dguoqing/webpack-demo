import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home';
import About from './About';

export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => {
    return (
        <>
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/55555555555">About</Link>
                    </li>
                    <li>
                        <Link to="/other">Other</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about/:id'>
                        <About name='cc'/>
                    </Route>
                </Switch>
            </Router>
        </div>
    </>
    )
};