import { Router, Route, Link } from 'react-router'

signInFunction({params}, (err, res) => {
  // Now in the sign in callback
  if (err)
    alert("Please try again")
  else {
    const location = this.props.location
    if (location.state && location.state.nextPathname) {
      browserHistory.push(location.state.nextPathname)
    } else {
      browserHistory.push('/')
    }
  }
})

function requireAuth(nextState, replace) {
  if (!userExists()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path="protectedRoute" component={Profile} onEnter={requireAuth} />
      <Route path="signin" component={Authenticate} />
  </Router>
)