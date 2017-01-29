import { Router, Route, Link } from 'react-router'

function requireAuth(nextState, replace) {
  $.post('/login', (data) => {
        if (!userExists()) {
            replace({
            pathname: '/start',
            state: { nextPathname: nextState.location.pathname }
            })
        }
  });
}

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path="protectedRoute" component={Profile} onEnter={requireAuth} />
      <Route path="start" component={Authenticate} />
  </Router>
)