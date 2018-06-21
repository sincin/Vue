import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from "../cookie/cookie";
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/views/home'
import Login from '@/components/views/login'
import Index from '@/components/views/index'
import Rfq from '@/components/views/rfq'
import Demand from '@/components/views/demand'
import My from '@/components/views/my'
import Setting from '@/components/views/setting'
import Publish from '@/components/views/publish'
Vue.use(Router)
const router = new Router({
    linkActiveClass: 'active',
    routes:[
      {
        path: '/',
        name: 'Index',
        component: Index,
      },
      {
        path: '/rfq',
        name: 'Rfq',
        component: Rfq,
      },
      {
        path: '/demand',
        name: 'Demand',
        component:Demand,
      },
      {
        path: '/my',
        name: 'My',
        component:My,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta : {requireAuth:true}
      },
      {
        path: '/index',
        name: 'Index',
        component: Index,
      },
      {
        path: '/setting',
        name: 'Setting',
        component: Setting,
      },
      {
        path:'/publish',
        name:'publish',
        component: Publish,
      }
    ]
    });
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (getCookie('access_token')) {  // 当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});
export default router;
