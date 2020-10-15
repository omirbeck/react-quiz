import React from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreater from './containers/QuizCreater/QuizCreater';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz-creater' component={QuizCreater} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' component={QuizList} />
      </Switch>
    )

  if (this.props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' component={QuizList} />
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

export default connect(mapSateToProps)(App);
