// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入elementUI和css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入主页，单页面
import App from './App'
// 引入路由
import router from './router'
// 引入axios请求
// import axios from './http/index.js'
// 引入mock数据
import './mock/index'
import store from './store'

// vue 插件的形式引入 axios
import api from './http/index'
Vue.use(api)
// 全局注册elementUI
Vue.use(ElementUI)

// 将API方法绑定到全局
// Vue.prototype.$api = axios

Vue.config.productionTip = false

// 使用require来引入css
require('./style/css/project.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
