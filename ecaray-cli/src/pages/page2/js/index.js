import Vue from 'vue';
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";
Vue.use(ElementUI);
import app from './components/app';

new Vue({
    ...app
}).$mount('#app');