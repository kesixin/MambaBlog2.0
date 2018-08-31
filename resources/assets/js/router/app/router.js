import Main from '@/views/app/Main.vue';
import AuthCommon from "@/views/app/auth/common.vue";


export const otherRouter = {
    path: '/',
    component: Main,
    children:[
        {
            path:'/',
            meta:{
                title:'cocoyo'
            },
            name:'index',
            component:resolve=>void(require(['@/views/app/articles/index.vue'],resolve))
        },
        {
            path: 'articles/:slug',
            meta: {
                title: '文章详情 | cocoyo'
            },
            name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve))
        },
        {
            path:"/",
            component:AuthCommon,
            children:[
                {
                    path: '/',
                    component: AuthCommon,
                    children: [
                        {
                            path: '/login',
                            name: 'login',
                            component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)),
                            meta: {
                                requiresNotAuth: true,
                                title: '用户登录 | cocoyo'
                            }
                        },
                        {
                            path:'/register',
                            meta:{
                                title:'用户注册'
                            },
                            name:'register_tip',
                            component:resolve =>void(require(['@/views/app/auth/register.vue'],resolve)),
                        }
                    ]
                },
            ]
        }
    ]
};

export const appRouter = {

}

export const routers = [
    otherRouter,
    ...appRouter,
];