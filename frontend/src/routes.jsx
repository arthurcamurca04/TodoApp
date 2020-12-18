import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/about';
import Todo from './todo/todo';

export default function Routes(){
  return(    
      <Switch>
        <Route exact path="/" component={Todo}></Route>
        <Route path="/todos" component={Todo}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="*" to="/todos" />
      </Switch>    
  )
}