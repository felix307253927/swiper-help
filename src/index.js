/**
 * @author Created by felix on 17-12-4.
 * @email   307253927@qq.com
 */
'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue'
import Detail from './views/detail.vue'

import './css/style.scss';

const routes = [
  {
    path     : '/home',
    name     : 'home',
    component: Home
  },
  {
    path     : '/detail',
    name     : 'detail',
    component: Detail
  },
  {path: '*', redirect: '/home'},
]

const router = new Router({
  // mode: 'history',
  mode: 'hash', // default
  base: __dirname,
  routes
})

document.body.onload = function () {
  new Vue({
    el      : '#app',
    router,
    template: `
  <router-view class="container"></router-view>
  `,
    mounted() {
      window.android && android.domLoaded();
    }
  })
}
