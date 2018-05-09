// * This is the header component * //

import { h, Component } from 'preact';
import { Link } from 'preact-router';

import * as styles from './style.css';


interface HeaderProps { authKey: string, signedIn: boolean, setSignIn: any }
interface HeaderState { }


export default class Header extends Component<HeaderProps, HeaderState> {
    render() {
        const { authKey, signedIn, setSignIn } = this.props;
		return (
            <header class={styles.header}>
                <h1>Stellmart</h1>
                <nav>
                    <Link activeClassName={styles.active} href="/">Home</Link>
                    <Link activeClassName={styles.active} href="/profile">My profile</Link>
                    <Link onClick={() => { setSignIn(true) }} activeClassName={styles.active} href="#"> Sign In</Link>
                </nav>
            </header> 
		);
	}
}
