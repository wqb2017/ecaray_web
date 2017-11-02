/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:18
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-02 21:26:03
 */
import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

Vue.use(Router);

let router = new Router({
  routes:[{ path: '/', redirect: '/login' },...routes]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
