import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreater from './containers/QuizCreater/QuizCreater';


function App() {
  return (
    <Layout>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creater' component={QuizCreater} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' component={QuizList} />
        </Switch>
    </Layout>
  );
}

export default App;
