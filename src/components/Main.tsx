/* tslint:disable */
import * as React from 'react';
import AboutPage from './about/AboutPage';
import Card from "./properties/Card";
import HomePage from './home/HomePage';
import PropertyList from "./properties/Property-List";
import { Route ,Switch } from 'react-router-dom';
import ContactPage from "./contact/ContactPage";



export const Main = () => (
    <main>
        <Switch>
            <Route exact={true} path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path="/property" component={PropertyList}/>
            <Route path="/contacts" component={ContactPage}/>
            <Route path="/card" component={Card}/>
        </Switch>
    </main>
)