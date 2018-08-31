import Vue from 'vue';
import {routers} from './router';
import { LoadingBar, Spin } from 'iview';
import VueRouter from 'vue-router';
import {getToken} from '@/utils/auth';


Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start();
    Spin.show();
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!getToken()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}//把要跳转的地址作为参数传到下一步
            })
        }
    }
    if (to.matched.some(record => record.meta.requiresNotAuth)) {
            next({
                path: '/',
                query: {redirect: to.fullPath}//把要跳转的地址作为参数传到下一步
            })
    }
    next()
});

router.afterEach((to) => {
    LoadingBar.finish();
    Spin.hide()
});
