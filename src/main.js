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

import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;


import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import BaiduMap from 'vue-baidu-map'
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)


Vue.config.productionTip = false

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'VOdEb8mxTIU3h8GUQtuswmL65rpW5d2d'    //这个地方是官方提供的ak密钥
})
/* eslint-disable no-new */
import Home from './components/home/homepage'
import OneHouse from './components/onehouse/onehouse'
import HouseComment from './components/comment/housecomment'
import Login from './components/login/loginview'
import Registry from './components/login/registryview'
import AddHouse from './components/addhouse/addhouse'
import AddHouse01 from './components/addhouse/addhouse01'
import AddHouse02 from './components/addhouse/addhouse02'
import AddHouse03 from './components/addhouse/addhouse03'
import AddHouse11 from './components/addhouse/addhouse11'
import AddHouse12 from './components/addhouse/addhouse12'
import AddHouse21 from './components/addhouse/addhouse21'
import AddHouse00 from './components/addhouse/addhouse00'
import Reserve from './components/reserve/reserveview'
import Test from './components/test'
const router=new Router({
  routes:[
    {path:"/",component:Home},
    {path:"/one",component:OneHouse},
    {path:"/comment",component:HouseComment},
    {path:"/login",component:Login},
    {path:"/registry",component:Registry},
    {path:"/addhouse01",component:AddHouse01},
    {path:"/addhouse02",component:AddHouse02},
    {path:"/addhouse03",component:AddHouse03},
    {path:"/test",component:Test},
    {path:"/addhouse",component:AddHouse},
    {path:"/addhouse11",component:AddHouse11},
    {path:"/addhouse12",component:AddHouse12},
    {path:"/addhouse21",component:AddHouse21},
    {path:"/addhouse00",component:AddHouse00},
    {path:"/reserve",component:Reserve},
  ],
  mode:"history"
})


new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
