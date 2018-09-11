require('./bootstrap');

window.Vue = require('vue');

import iView from 'iview';
import HttpPlugin from './libs/http';
import App from './App.vue';
import {router} from './router/dashboard/index';
import {appRouter} from  './router/dashboard/router';
import store from './store';

Vue.use(iView);
Vue.use(HttpPlugin);

const app = new Vue({
    el:"#app",
    router:router,
    render: h=> h(App),
    store: store,

});