
import * as React from 'react';
import { Route,Router } from 'react-router';

import App from './components/App';

import HomePage from './components/home/HomePage';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export const AppRouter = () => {
    return (
        <Router history={history}>
            <Route path="/" component={App} >
                <Route path="/" exact={true} component={HomePage} />
            </Route>
        </Router>
    );
}
