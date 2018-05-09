// * This is the profile component * //

import { h, Component } from 'preact';

import * as styles from './style.css';

interface ProfileProps { user?: string, path ?: string }
interface ProfileState { }

export default class Profile extends Component<ProfileProps, ProfileState> {

	// Note: `user` comes from the URL, courtesy of our router
	render({ user } ) {
		return (
            <div class={styles.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>
			</div>
		);
	}
}
