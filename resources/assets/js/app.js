
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import iview from 'iview'
import store from './store/app'
import Home from './Home.vue'
import HttpPlugin from './libs/app_http'
import hljs from 'highlight.js'
import {router}from './router/app/index'
import Share from 'vue-social-share'

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})

Vue.use(Vuetify);
Vue.use(iview);
Vue.use(Share);
Vue.use(HttpPlugin);

Vue.component('comment_post',require('./components/comments/Comment_Post.vue'));

const app = new Vue({
    el: '#app',
    store:store,
    router:router,
    render:h=>h(Home)
});
