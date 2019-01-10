import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Brews from './components/Brews';

//routing and switch statement to provide routes/navigation through the site
const Root = () => (
    <Router>
        <React.Fragment>
        <Navbar />
        <Switch>
            <Route component={App} exact path="/" />
            <Route component={Signin} path="/Signin" />
            <Route component={Signup} path="/Signup" />
            <Route component={Checkout} path="/Checkout" />
            <Route component={Brews} path="/:brandId" />
        </Switch>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();

//this hot module conditional allows the webpage to reload and reflect any changes made
//in the source code without having to save the file or hitting the reload button in the browser
if (module.hot){
    module.hot.accept();
}