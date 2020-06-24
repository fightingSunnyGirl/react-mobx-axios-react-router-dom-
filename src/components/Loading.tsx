import * as React from 'react';
import { Spin } from 'antd';

const Loading:any = (props: any) => {
  return (
    <div>
      <Spin style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)'
      }} />
    </div>
  )
}

export default Loading;