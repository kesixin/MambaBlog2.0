import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import {getToken} from '@/utils/auth';
import {routers,otherRouter} from './router';
import Util from '../../libs/util';

Vue.use(VueRouter);

const RouterConfig = {
    routes:routers
}

export const router = new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
    iView.LoadingBar.start();
    Util.title(to.meta.title);

    let token = getToken();
    console.log(token);
    if( !token ){
        window.location.href = '/#/login';
    }

    Util.toDefaultPage([otherRouter],to.name,router,next);

});

router.afterEach((to)=>{
    Util.openNewPage(router.app,to.name,to.params,to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0,0);
});

