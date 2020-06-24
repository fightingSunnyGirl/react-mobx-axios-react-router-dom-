import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from '@/routes';
import './App.less';

const App = ()=> {
    return (
      <Router>
        <Switch>
          {
            routes.map(route => (
              <Route key={route.path} exact={!!route.exact} path={route.path} component={route.component}/>
            ))
          }
        </Switch>
      </Router>
    )
  
}

export default App
