import  React  from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import AppContainer from './containers/AppContainer';
import AuthenticateComponent  from './authenticate/auth';
import AuthService from './authenticate/auth-service';
import {Provider }from 'react-redux';
import store from './stores/main';

function requireAuth(nextState, replace) {
        if (!AuthService.isAuth()) {
            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/');
            }
        }
}

class BarberComponent extends React.Component {
    render() {
        return  <Provider store={store}>
                        <Router history={browserHistory} component={AuthenticateComponent} >
                            <Route path="protectedprofile" component={AppContainer} onEnter={requireAuth}  />
                            <Route path="start" component={AuthenticateComponent} />
                        </Router>
                </Provider>
                
    }
}


render(<BarberComponent />, document.getElementById('container'))