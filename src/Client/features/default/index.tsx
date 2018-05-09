// * This is the default route that displays an error * //

import { h, Component } from 'preact';

interface DefaultProps { default ?: boolean  }
interface DefaultState { }

export default class Default extends Component<DefaultProps, DefaultState> {
    render() {
        return (
            <div>
                <h1>Error</h1>
                <p> The page you are looking for could not be found</p>
            </div>
        );
    }
}