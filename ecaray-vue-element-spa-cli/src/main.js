import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store';
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

import "./common/sass/index.scss";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
