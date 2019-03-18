// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import axios from './axios'

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>',
  mounted: function() {
    axios.get("http://127.0.0.1:6080/getToken")
        .then(function(response) {
          console.log("请求成功：%o",response);
        })
        .catch(function(error) {
          console.log("请求失败：%o",error);
        })
  }
})
