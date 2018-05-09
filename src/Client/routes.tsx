// * This is the router that impements preact-router * //

import { h, render, Component } from 'preact';
import { Router, RouteProps, Route } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';

import Header from './components/header/index';
import Home from './features/home/index';
import Profile from './features/profile/index';
import Default from './features/default/index';

import * as style from './style.css';

interface IndexProps { authKey: string, signedIn: boolean, setAuth, setSignIn }
interface IndexState { }

export default class Routes extends Component<IndexProps, IndexState> {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

    render() {
        const { authKey, signedIn, setAuth, setSignIn } = this.props;
        return (
            <div id="route">
                <Header {...{ authKey, signedIn, setAuth, setSignIn }} />
                <Router>
                    <Home path="/" {...{ authKey, signedIn, setAuth, setSignIn }} />
                    <Profile path="/profile/" user="me" />
                    <Profile path="/profile/:user" />
                    <Default default />
                </Router>
            </div>
        )
    }
}