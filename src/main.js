// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'


Vue.config.productionTip = false

Vue.use(Router)
Vue.use(ElementUI)
/* eslint-disable no-new */
import Home from './components/home/homepage'
const router=new Router({
  routes:[
    {path:"/",component:Home}
  ],
  mode:"history"
})


new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
