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

export const appRouter = [
    {
        path: '/users',
        icon: 'android-people',
        name: 'users',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'index', title: '用户管理', name: 'users_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/categories',
        icon: 'more',
        name: 'categories',
        title: '分类管理',
        component: Main,
        children: [
            { path: 'index', title: '分类管理', name: 'categories_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/tags',
        icon: 'pricetags',
        name: 'tags',
        title: '标签管理',
        component: Main,
        children: [
            { path: 'index', title: '标签管理', name: 'tags_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/comments',
        icon: 'chatboxes',
        name: 'comments',
        title: '评论管理',
        component: Main,
        children: [
            { path: 'index', title: '评论管理', name: 'comments_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/articles',
        icon: 'ios-book',
        name: 'articles',
        title: '文章管理',
        component: Main,
        children: [
            { path: 'index', title: '文章管理', name: 'articles_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    },
    {
        path: '/links',
        icon: 'ios-redo',
        name: 'links',
        title: '友链管理',
        component: Main,
        children: [
            { path: 'index', title: '友链管理', name: 'links_index', component: resolve => void(require(['@/views/dashboard/users/index.vue'], resolve)) },
        ]
    }
]

export const routers = [
    otherRouter,
    ...appRouter,

];