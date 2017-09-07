/**
 * @description home模块路由配置
 * @author wangqibiao
 * @date 2017-09-6, 14:53:28 GMTCST
 */

import Home from 'Spa@comp/pages/home';
import Table from 'Spa@comp/pages/table';
import Form from 'Spa@comp/pages/form';
import Progress from 'Spa@comp/pages/progress';
import Switch from 'Spa@comp/pages/switch';
import Time from 'Spa@comp/pages/time';
import Rate from 'Spa@comp/pages/rate';

export default {
  path: '/',
  component: Home,
  children: [
    {
      path: 'table',
      component: Table,
      meta: { title: "表单" }
    },
    {
      path: 'form',
      component: Form,
      meta: { title: "表格" }
    },
    {
      path: 'progress',
      component: Progress,
      meta: { title: "进度条" }
    },
    {
      path: 'switch',
      component: Switch,
      meta: { title: "滑块" }
    },
    {
      path: 'time',
      component: Time,
      meta: { title: "时间" }
    },
    {
      path: 'rate',
      component: Rate,
      meta: { title: "评分" }
    }
  ]
};