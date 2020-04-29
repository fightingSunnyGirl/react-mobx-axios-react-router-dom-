import React , { Component } from 'react';
import { hot } from "react-hot-loader";
// import './assets/css/theme.less'
import './App.css';
// import UselessTest from "./views/useless";
import AntdExample from "./views/useAntd";
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
        {/* <UselessTest /> */}
        <ExampleEffectHook />
        <AntdExample />
      </div>
    );
  }
}

export default hot(module)(App);