import React , { Component } from 'react';
import { hot } from "react-hot-loader";
import './App.css';
import UselessTest from "./views/useless"
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
      </div>
    );
  }
}

export default hot(module)(App);