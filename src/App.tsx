import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from '@/routes';
import Header from '@layout/Header';
import Footer from '@layout/Footer';
// import NotFound from '@views/Error/NotFound';
import RouterAuth from '@layout/RouterAuth'; 
import './App.less';

const App = (props:any)=> {
    return (
      <Router>
        <Header/>
        <Switch>
          {/* {
            routes.map(route =>{
              return (
                <Route key={route.path} exact={!!route.exact} path={route.path} component={route.component}/>
              )
            })
          }
            <Route component={NotFound} /> */}
          <RouterAuth routerConfig={routes}/>
        </Switch>
        <Footer/>
      </Router>
    )
}

export default App
