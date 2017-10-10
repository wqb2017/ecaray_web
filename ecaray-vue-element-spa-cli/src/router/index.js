import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import { routes } from "./routes";

const router = new Router({
  routes: [{ path: "/", redirect: "/login" }, ...routes]
});
// 路由钩子
router.beforeEach((to, from, next) => {
  //判断是否显示title
  if (to.meta.title) {
    document.title = "亿车公共平台-" + to.meta.title;
  }
  // 判断是否显示详情页
  if (to.meta.details) {
    if (!Object.keys(to.params).length) {
      let path = to.path.split("/");
      path.pop();
      path = path.join("/");
      next({ path });
    }
  }
  next();
});

export default router;
