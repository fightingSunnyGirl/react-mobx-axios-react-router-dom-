import React , { Component } from 'react';
import { hot } from "react-hot-loader";
import './App.css';
import UselessTest from "./views/useless";
import {ExampleEffectHook} from "./views/useHook";
class App extends Component{
  handleClick=()=>{
    import('./views/test').then(({bb})=>{
      console.log(bb)
    })
    .catch(err=>{

    })
  }
  render(){
    return (
      <div className="App">
        <UselessTest />
        <ExampleEffectHook />
      </div>
    );
  }
}

export default hot(module)(App);