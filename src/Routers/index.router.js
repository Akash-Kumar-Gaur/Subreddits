import React, { Component } from 'react';
import {
    Route, Switch
} from 'react-router-dom';

import HomeScene from '../Scenes/Home-Scene/home.scene';

export default class MainClass extends Component {

    render() {
        return (
            <div>
                <div className="app-container">
                    {/* <HeaderNav history={match} {...this.props} /> */}
                    {/* <HeaderComponent /> */}
                    {/* <HeaderComponent /> */}
                    <Switch>
                        <Route exact path='/' component={HomeScene} />
                    </Switch>
                </div>
            </div>
        )
    }
}