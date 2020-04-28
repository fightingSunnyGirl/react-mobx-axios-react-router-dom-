import React , { Component } from 'react';
import '../assets/css/useless.less'
import {get} from '../axios'

class UselessTest extends Component{
  getDate = ()=>{
    get('trial.h5.homepage.get').then(res=>{
      console.log(res)
    })
  }
  componentDidMount(){
    this.getDate()
  }
  render(){
    return <div className="btn">
      <p>测试测试测试</p>
      <p>测试测试测试2</p>
      <p>测试测试测试3</p>
    </div>
  } 
}

export  default UselessTest