
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Home from './Home.vue'
import {router}from './router/app/index'



const app = new Vue({
    el: '#app',
    router:router,
    render:h=>h(Home)
});
