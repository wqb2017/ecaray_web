/**
 * @description main入口
 * @author wangqibiao
 * @date 2017-09-6, 14:53:28 GMTCST
 */

import Vue from 'vue';
import router from './router';
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
Vue.use(ElementUI);
import app from './components/app';

new Vue({
    router,
    ...app
}).$mount('#app');