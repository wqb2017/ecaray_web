/**
 * @description 路由配置
 * @author wangqibiao
 * @date 2017-09-6, 14:53:28 GMTCST
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((route, from, next) => {
    let { meta } = route;
    meta.title && (window.document.title = meta.title + "-亿车手脚架");
    next();
});

export default router;