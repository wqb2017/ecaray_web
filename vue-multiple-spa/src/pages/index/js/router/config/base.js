/**
 * @description 基本配置
 * @author wangqibiao
 * @date 2017-09-6, 14:53:28 GMTCST
 */

//错误
import Error from 'Spa@comp/pages/error';
//登录
import Login from 'Spa@comp/pages/login';

export default [
  {
    path: '/',
    redirect: '/login',
    meta: { title: "登录" }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: "登录" }
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: { title: "错误" }
  },
  {
    path: '*',
    redirect: '/error',
    meta: { title: "错误" }
  }
];