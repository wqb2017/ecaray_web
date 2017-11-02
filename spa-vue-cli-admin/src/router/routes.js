import Login from '@/view/layout/login';
import Home from '@/view/layout/home';
import Workbench from '@/view/workbench';
import Survey from '@/view/datas/survey';
import Integration from '@/view/datas/integration';

export const routes = [
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
