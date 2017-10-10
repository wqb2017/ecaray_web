import error from "../views/error";
import home from "../views/index/home";
import login from "../views/index/login";
export const routes = [
  {
    path: "/",
    component: home,
    children: [
      {
        path: "error",
        component: error,
        meta: {
          title: "出错了"
        }
      },
    ]
  },
  {
    path: "/login",
    component: login,
    meta: {
      title: "登录"
    }
  }
];
