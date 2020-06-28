import * as React from 'react';
import { Result, Button } from 'antd';

export interface IAppProps {
}

export default function NotFound(props: IAppProps) {
  return (
    <div>
      <Result
        style={{backgroundColor:'#ffffff',width:'1200px',margin:'0 auto'}}
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={<Button type="primary" href="/">返回首页</Button>}
      />
    </div>
  );
}
