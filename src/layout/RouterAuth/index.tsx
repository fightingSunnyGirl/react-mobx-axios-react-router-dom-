// 路由拦截器
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import NotFound from '@views/Error/NotFound';

interface RouterAuthProps {
  routerConfig:any;
  location?:any;
}

const RouterAuth: React.FunctionComponent<RouterAuthProps> = (props) => {
  const {routerConfig} = props;
  const {pathname} = props.location;
  const Exp = /\/.*?(?=\/)/;//正则匹配
  const dynamicPath = pathname.match(Exp) && pathname.match(Exp)[0];//用于比对路径 适用 动态路由 
  
  // 目标路由
  const targetRouterConfig = routerConfig.find((item:any)=> {

    return item.path == pathname || (dynamicPath && item.path.match(Exp) && pathname.match(Exp)[0] == item.path.match(Exp)[0])
  })
  // 设置meta信息
  document.title = targetRouterConfig ? targetRouterConfig.name : 'meta信息';

  return(
    <div>
      {
       targetRouterConfig ?
       <Route key={targetRouterConfig.path} exact={!!targetRouterConfig.exact} path={targetRouterConfig.path} component={targetRouterConfig.component}/> :
       <Route component={NotFound} />
      }
    </div>
  )
};

export default RouterAuth;
