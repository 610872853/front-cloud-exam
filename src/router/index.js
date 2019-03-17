import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Index from '@/components/Index'
import About from '@/components/About'
import Register from '@/components/Register'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "/index",
          component: Index,
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/about",
          component: About,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: "/login",
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        requireAuth: false
      }
    },
    {
      path: "*",
      redirect: "/",
      meta: {
        requireAuth: false
      }
    }
  ],
  mode: "history",
  
});

//路由全局拦截器
router.beforeEach(function(to,from,next) {
  
  if(to.meta.requireAuth) {
    if(store.state.user.token != "") {
       next();

    }else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
    
  }else {
    next();
  }
});

export default router;