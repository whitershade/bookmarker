import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../decorators/PrivateRoute';
import Articles from '../features/articles/list';
import Article from '../features/articles/single';
import ArticleForm from '../features/articles/form';
import LoginForm from '../features/user/login';
import RegisterForm from '../features/user/register';

const NoMatch = () => <div>404</div>;

const routes = (
  <Switch>
    <PrivateRoute exact path="/" component={Articles} />
    <PrivateRoute exact path="/articles/add" component={ArticleForm} />
    <PrivateRoute exact path="/articles/:id" component={Article} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route component={NoMatch} />
  </Switch>
);

export default routes;
