import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/login"
    },
    {
        path: '/login',
        component: () => import("../pages/login.vue")
    },
    {
        path: '/panel',
        component: () => import("../pages/panel.vue"),
        children: [
            {
                path: '',
                redirect: "houxue"
            },
            {
                path: 'lirui',
                component: () => import("../pages/lirui.vue")
            },
            {
                path: 'shiyi',
                component: () => import("../pages/shiyi.vue")
            },
            {
                path: 'huijun',
                component: () => import("../pages/huijun.vue")
            },
            {
                path: 'chenwei',
                component: () => import("../pages/chenwei.vue")
            },
            {
                path: 'wubo',
                component: () => import("../pages/wubo.vue")
            },
            {
                path: 'houxue',
                component: () => import("../pages/houxue.vue")
            },
            {
                path: 'zhanghan',
                component: () => import("../pages/zhanghan.vue")
            },

        ]
    }
]


const router = new VueRouter({
    routes,
})

router.beforeEach((to, form, next) => {
    if (to.path != '/login') {
        const token = localStorage.getItem("token-1");
        if (token === 'logined') {
            console.log(1111);
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})

export default router