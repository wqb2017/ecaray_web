/*
 * @Author: wangqibiao
 * @Date: 2017-11-02 20:21:33
 * @Last Modified by:   wangqibiao
 * @Last Modified time: 2017-11-02 20:21:33
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import "element-ui/lib/theme-default/index.css";
import "./common/style/theme/blue/index.css";
import "./common/style/reset.scss";
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
