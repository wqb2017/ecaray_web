/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:20:18
 * @Last Modified by: wangqibiao
 * @Last Modified time: 2017-11-04 21:41:36
 */
import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routes';

Vue.use(Router);

let router = new Router({
  routes:[...routes]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
