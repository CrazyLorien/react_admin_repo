import  React  from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import AuthenticateComponent  from './authenticate/auth';
import AuthService from './authenticate/auth-service';
import {Provider }from 'react-redux';
import store from './stores/main';
import UsersContainer from './containers/UsersContainer';
import EditedUserContainer from './containers/EditedUserContainer';

function requireAuth(nextState, replace) {
        if (!AuthService.isAuth()) {
            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            }else {
                this.props.router.replace('/');
            }
        }
}

class BarberComponent extends React.Component {
    render() {
        return  <Provider store={store}>
                        <Router history={browserHistory} >
                            <Route path="adminprofile"  >
                                <IndexRoute  component={AppContainer} onEnter={requireAuth} />
                                <Route path="listofusers" component={UsersContainer} onEnter={requireAuth}/>
                                <Route path="edituserprofile/:userid" component={EditedUserContainer} onEnter={requireAuth} />
                                <Route path="editRoles/:userId" component={EditedUserContainer} onEnter={requireAuth} />
                                <Route path="editRole/:roleId/editPermissions" component={EditedUserContainer} onEnter={requireAuth} />
                            </Route>
                            <Route path="start" component={AuthenticateComponent} />
                        </Router>
                </Provider>
                
    }
}


render(<BarberComponent />, document.getElementById('container'))