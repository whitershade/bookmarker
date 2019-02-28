import React from 'react';
import { Route, Switch } from 'react-router';
import Articles from '../features/articles/list';
import Article from '../features/articles/single';
import ArticleForm from '../features/articles/form';

const NoMatch = () => <div>404</div>;

const routes = (
  <Switch>
    <Route exact path="/" component={Articles}/>
    <Route exact path="/articles/add" component={ArticleForm} />
    <Route exact path="/articles/:id" component={Article} />
    <Route component={NoMatch} />
  </Switch>
);

export default routes;
