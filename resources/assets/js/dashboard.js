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
    data:{
        currentPageName:''
    },
    mounted(){
        this.currentPageName = this.$route.name;
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
    },
    created(){
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }

});