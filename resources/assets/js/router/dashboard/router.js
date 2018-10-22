import Main from '@/views/dashboard/Main.vue';

export const otherRouter = {
    path:'/',
    name:'otherRouter',
    redirect:'/home',
    component:Main,
    children:[
        { path:'home',title:'主页',name:'home_index',component:resolve=>void(require(['@/views/dashboard/home/home.vue'],resolve)) },
        { path:'users/:id/edit',title:'编辑用户',name:'users_edit',component:resolve=>void(require(['@/views/dashboard/users/edit.vue'],resolve))},
        { path:'categories/add',title:'添加分类',name:'categories_add',component:resolve=>void(require(['@/views/dashboard/categories/add.vue'],resolve))},
        { path:'categories/:id/edit',title:'编辑分类',name:'categories_edit',component:resolve=>void(require(['@/views/dashboard/categories/edit.vue'],resolve))},
        { path:'tags/add',title:'添加标签',name:'tags_add',component:resolve=>void(require(['@/views/dashboard/tags/add.vue'],resolve))},
        { path:'tags/:id/edit',title:'编辑标签',name:'tags_edit',component:resolve=>void(require(['@/views/dashboard/tags/edit.vue'],resolve))},
        { path:'articles/add',title:'添加文章',name:'articles_add',component:resolve=>void(require(['@/views/dashboard/articles/add.vue'],resolve))},
        { path:'links/add',title:'添加友链',name:'links_add',component:resolve=>void(require(['@/views/dashboard/links/add.vue'],resolve))},
        { path:'links/:id/edit',title:'编辑友链',name:'links_edit',component:resolve=>void(require(['@/views/dashboard/links/edit.vue'],resolve))},
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
            { path: 'index', title: '分类管理', name: 'categories_index', component: resolve => void(require(['@/views/dashboard/categories/index.vue'], resolve)) },
        ]
    },
    {
        path: '/tags',
        icon: 'pricetags',
        name: 'tags',
        title: '标签管理',
        component: Main,
        children: [
            { path: 'index', title: '标签管理', name: 'tags_index', component: resolve => void(require(['@/views/dashboard/tags/index.vue'], resolve)) },
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
            { path: 'index', title: '文章管理', name: 'articles_index', component: resolve => void(require(['@/views/dashboard/articles/index.vue'], resolve)) },
        ]
    },
    {
        path: '/links',
        icon: 'ios-redo',
        name: 'links',
        title: '友链管理',
        component: Main,
        children: [
            { path: 'index', title: '友链管理', name: 'links_index', component: resolve => void(require(['@/views/dashboard/links/index.vue'], resolve)) },
        ]
    }
]

export const routers = [
    otherRouter,
    ...appRouter,

];