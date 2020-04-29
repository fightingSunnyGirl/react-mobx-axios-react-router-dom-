// 路由配置文件 

import home from '../views/index';
import useLess from '../views/useless';
import login from '../views/login';
import notFound from '../views/404';

export const routerConfig = [
  {
    path:'/',
    component:home,
  },
  {
    path:'/useless',
    component:useLess,
  },
  {
    path:'/login',
    component:login,
  },
  {
    path:'/404',
    component:notFound,
  },

]

 