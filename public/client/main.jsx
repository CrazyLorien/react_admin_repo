import  React  from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Profile from '.\\profile\\profile'
import  AuthenticateComponent  from '.\\authenticate\\auth'
import AuthService from '.\\authenticate\\auth-service'

function requireAuth(nextState, replace) {
        if (!AuthService.isAuth()) {
            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }
        }
}

class BarberComponent extends React.Component {
    render() {
        return  (<Router history={browserHistory} component={AuthenticateComponent} >
                    <Route path="protectedprofile" component={Profile} onEnter={requireAuth}  />
                    <Route path="start" component={AuthenticateComponent} />
                </Router>)
    }
}


render(<BarberComponent />, document.getElementById('container'))