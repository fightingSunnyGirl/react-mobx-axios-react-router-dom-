import React , { Component } from 'react';
import { Button } from 'antd';

class AntdExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'xiaoli'
    }
  }
  render(){
    return (
     <div>
      <Button type="dashed">Dashed</Button>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
     </div>
    )
  }
}

export default AntdExample