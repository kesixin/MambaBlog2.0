import Main from '@/views/dashboard/Main.vue';

export const otherRouter = {
    path:'/',
    name:'otherRouter',
    redirect:'/home',
    component:Main,
    children:[
        { path:'home',title:'主页',name:'home_index',component:resolve=>void(require(['@/views/dashboard/home/home.vue'],resolve)) },
    ]
};

export const routers = [

    otherRouter
];