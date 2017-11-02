/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:23:39
 * @Last Modified by:   wangqibiao
 * @Last Modified time: 2017-11-02 20:23:39
 */
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
