// * This is the home component * //

import { h, Component } from 'preact';
import { Router, RouteProps, Route } from 'preact-router';

import * as styles from './style.css';

interface HomeProps { path?: string, authKey: string, signedIn: boolean, setAuth, setSignIn }
interface HomeState { }

export default class Home extends Component<HomeProps, HomeState> {
    render() {
        const { authKey, signedIn, setAuth, setSignIn } = this.props;
        const signedInMessage = signedIn ? (<p> User is signed in</p>)
            : (<p> User is signed out</p>);
		return (
            <div class={styles.home}>
				<h1>Home</h1>
                <p>This is the cool Home component.</p>
                {signedInMessage}
			</div>
		);
	}
}
