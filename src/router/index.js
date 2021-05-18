import navbar from "../views/layout/navbar.vue";
import sidebar from "../views/layout/sidebar.vue";
import content from "../views/layout/content.vue";
import signin from '../views/auth/signin.vue'
import notfound from '../views/404/notfound.vue'
import network from '../views/network/network.vue'
import regist from '../views/network/regist.vue'
import home from '../views/home/home.vue'
import dashboard from '../views/dashboard/dashboard.vue'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

import {
    computed,
} from 'vue'

import store from '../store/index'
// 加载基础路由
const routes = [{
        path: '/',
        redirect: {
            name: 'signin'
        }
    },
    {
        path: '/v1',
        name: 'home',
        components: {
            navbar,
            sidebar,
            content,
        },
        meta: {
            isAuthenticated: true
        },
        children: [{
                path: 'network',
                name: 'network',
                component: network
            },
            {
                path: 'regist',
                name: 'regist',
                component: regist
            },
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: dashboard
            },

            {
                path: ':pathMatch(.*)*',
                component: notfound
            },
        ]
    },
    {
        path: '/signin',
        name: 'signin',
        components: {
            signin
        },
    },
    {
        path: '/network',
        components: {
            network
        }
    },
    {
        path: '/dashboard',
        components: {
            dashboard
        }
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const authdata = computed(() => store.state.authdata)


// router.beforeEach((to, from, next) => {
//     if ((to.name !== 'signin' && !authdata.value.isAuthenticated) && !localStorage.getItem("username")) next({
//         name: 'signin'
//     })
//     else next()
// })

export default router