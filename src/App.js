import React from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreater from './containers/QuizCreater/QuizCreater';
import Logout from './components/Logout/Logout';
import { connect } from 'react-redux';
import { autoLogin } from './store/actions/auth';


class App extends React.Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' exact component={QuizList} />
        <Redirect to='/' />
      </Switch>
    )

  if (this.props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/quiz-creater' component={QuizCreater} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/logout' component={Logout} />
        <Route path='/' exact component={QuizList} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return(
    <Layout>
      {routes}
    </Layout>
  );
}
}

const mapSateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(App));
