/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:21
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-02 21:11:49
 */
import Login from '@/view/layout/login';
import Home from '@/view/layout/home';
import Workbench from '@/view/workbench';
import Survey from '@/view/datas/survey';
import Integration from '@/view/datas/integration';

export const routes = [
  {
    path: '*',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "datas/survey",
        name: "survey",
        component: Survey,
      },
      {
        path: "datas/integration",
        name: "integration",
        component: Integration,
      },
      {
        path: "workbench",
        name: "workbench",
        component: Workbench,
      }
    ]
  }
];
