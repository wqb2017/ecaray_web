import Vue from 'vue';
import App from './App';
import router from './router';

import '@/style/index.scss';
Vue.config.productionTip = false;

// 引入全局过滤器
import * as filters from './filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
// 引入全局指令
import * as directives from './directives';
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});
// 引入全局mixins
import * as mixins from './mixins';
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key]);
});
// 全局组件
import components from './components';
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
