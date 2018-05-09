// * This is the entry point for the app * //

// Import node modules
import { h, render, Component } from 'preact';
import { Router, RouteProps, Route } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';

// Import components
import Routes from './routes';

// Import styles
import * as style from './style.css';

// Set initial state for unistore
const initialState = {
    authKey: "",
    signedIn: false
}

// Create unitstore store
let store = createStore(initialState);

// accept hot module update
if ((module as any).hot) {
    (module as any).hot.accept();
    module['hot'].dispose(() => {
        // Before restarting the app, we dispose the old root element
        const oldRootElem = document.getElementById('app');
        oldRootElem.parentNode.removeChild(oldRootElem);
    });
}

// Add actions to store
let actions = store => ({
    setAuth(key)
    {
        return { authKey: key };
    },
    setSignIn(state) { return { signedIn: state } }
});

// Define interface types
interface AppProps { authKey: string, signedIn: boolean, setAuth, setSignIn }
interface AppState { }

// Create higher order connect component
const GlobalState = connect(["authKey", "signedIn"], actions)(({ authKey, signedIn, setAuth, setSignIn }) => 
    <App {...{ authKey, signedIn, setAuth, setSignIn  }}/>
)

// Define App component
export default class App extends Component<AppProps, AppState> {

    render() {
        const { authKey, signedIn, setAuth, setSignIn } = this.props;
        return (
            <div id="app">
                <Routes {...{ authKey, signedIn, setAuth, setSignIn }} />
            </div>
              
        )
	}
}

// Bootstrap preact app
render(<Provider store={store}><GlobalState /></Provider>, document.getElementById('root'));
