import navbar from "../views/layout/navbar.vue";
import sidebar from "../views/layout/sidebar.vue";
import content from "../views/layout/content.vue";
import signin from "../views/auth/signin.vue";
import notfound from "../views/404/notfound.vue";
import network from "../views/network/network.vue";
import regist from "../views/network/regist.vue";
import home from "../views/home/home.vue";
// import dashboard from '../views/dashboard/dashboard.vue'
import excel from "../views/excel/excel.vue";
import upload from "../views/excel/upload.vue";
import report from "../views/excel/report.vue";
import dyn from "../views/dyn/dyn.vue";
import handledwarn from "../views/warn/handledwarn.vue";
import unHandlewarn from "../views/warn/unHandlewarn.vue";
import currentwarn from "../views/warn/currentwarn.vue";

import { createRouter, createWebHistory } from "vue-router";

import { computed } from "vue";

import store from "../store/index";
const dashboard = () => import("../views/dashboard/dashboard.vue");
// 加载基础路由
const routes = [
  {
    path: "/",
    redirect: {
      name: "signin",
    },
  },
  {
    path: "/v1",
    name: "home",
    components: {
      navbar,
      sidebar,
      content,
    },
    meta: {
      isAuthenticated: true,
    },
    children: [
      {
        path: "network",
        name: "network",
        component: network,
      },
      {
        path: "regist",
        name: "regist",
        component: regist,
      },
      {
        path: "home",
        name: "home",
        component: home,
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: dashboard,
      },
      {
        path: "excel",
        name: "excel",
        component: excel,
      },
      {
        path: "upload",
        name: "upload",
        component: upload,
      },
      {
        path: "dyn",
        name: "dyn",
        component: dyn,
      },
      {
        path: "report",
        name: "report",
        component: report,
      },
      {
        path: "warnManage/handledwarn",
        name: "handledwarn",
        component: handledwarn,
      },
      {
        path: "warnManage/unHandlewarn",
        name: "unHandlewarn",
        component: unHandlewarn,
      },
      {
        path: "warnManage/currentwarn",
        name: "currentwarn",
        component: currentwarn,
      },

      {
        path: ":pathMatch(.*)*",
        component: notfound,
      },
    ],
  },
  {
    path: "/signin",
    name: "signin",
    components: {
      signin,
    },
  },
  {
    path: "/dashboard",
    components: {
      dashboard,
    },
  },
];
const router = createRouter({
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    });
  },
  history: createWebHistory(),
  routes,
});

// const authdata = computed(() => store.state.authdata);
const authdata = store.getters.authdata;

// 导航守卫 登陆验证
router.beforeEach((to, from, next) => {
  if (
    to.name !== "signin" &&
    !authdata.isAuthenticated &&
    !localStorage.getItem("username")
  )
    next({
      name: "signin",
    });
  else next();
});

export default router;
