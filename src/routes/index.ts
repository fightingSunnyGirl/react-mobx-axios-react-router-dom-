import Loadable from 'react-loadable';
import Loading from '@components/Loading';

const routes = [
  {
    path: '/',
    exact:true,
    name:'首页',
    component: Loadable({
      loader: () => import('@views/Home'),
      loading:()=>Loading()
    })
  },
  {
    path: '/test/:id?',
    exact:true,
    name:'测试页',
    component: Loadable({
      loader: () => import('@views/Test'),
      loading:()=>Loading()
    })
  },
  {
    path: '/useHook',
    exact:true,
    name:'函数组建demo',
    component: Loadable({
      loader: () => import('@views/HookPage'),
      loading:()=>Loading()
    })
  },
];

export default routes

