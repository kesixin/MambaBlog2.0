import Vue from 'vue';
import {routers} from './router';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const RouterConfig = {
    routes:routers
}

export const router = new VueRouter(RouterConfig);

