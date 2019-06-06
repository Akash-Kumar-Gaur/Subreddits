import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';

// /** Router */
import IndexRouter from './index.router';
// /** Router ends */

export default class EntryComponent extends Component {

    render() {
        return (
            <Router>
                <Route path="/" component={BasicRoute} />
            </Router>
        )
    }
}

export class BasicRoute extends Component {
    render() {
        return (
            <div id='root-element'>
                <Switch>
                    <Route path="/" component={IndexRouter} />
                </Switch>
            </div>
        )
    }
}
