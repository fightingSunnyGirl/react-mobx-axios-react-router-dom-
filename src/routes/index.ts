import Loadable from 'react-loadable';
import Loading from '@components/Loading';
const routes = [
  {
    path: '/',
    exact:true,
    name:'首页',
    useHooks:false,//是否是函数组建
    component: Loadable({
      loader: () => import('@views/Home'),
      loading:()=>Loading()
    })
  },
  {
    path: '/test/:id?',
    exact:true,
    name:'测试页',
    useHooks:false,
    component: Loadable({
      loader: () => import('@views/Test'),
      loading:()=>Loading()
    })
  },
  {
    path: '/useHook',
    exact:true,
    name:'函数组建demo',
    useHooks:true,
    component: Loadable({
      loader: () => import('@views/HookPage'),
      loading:()=>Loading()
    })
  },
  {
    path: '/useHookTest',
    exact:true,
    name:'函数组建运用mobx',
    useHooks:true,
    component: Loadable({
      loader: () => import('@views/HookUseTest'),
      loading:()=>Loading()
    })
  },
];

export default routes

