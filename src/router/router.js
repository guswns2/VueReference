import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/projectgen'
    },
    {
        path: '/projectgen',
        name: 'projectgen',
        component: () => import(/* webpackChunkName: "ProjectGen" */ '@/views/Project/ProjectGen.vue')
    },
    {
        path: '/projectfile',
        name: 'projectfile',
        component: () => import(/* webpackChunkName: "ProjectFile" */ '@/views/Project/ProjectFile.vue')
    },
    {
        path: '/projectproc',
        name: 'projectproc',
        component: () => import(/* webpackChunkName: "ProjectProc" */ '@/views/Project/ProjectProc.vue')
    },
    {
        path: '/alldirective',
        name: 'alldirective',
        component: () => import(/* webpackChunkName: "AllDirect" */ '@/views/Element/AllDirective.vue')
    },
    {
        path: '/allcomponent',
        name: 'allcomponent',
        component: () => import(/* webpackChunkName: "AllComponent" */ '@/views/Element/AllComponent.vue')
    },
    {
        path: '/allrouter',
        name: 'allrouter',
        component: () => import(/* webpackChunkName: "AllRouter" */ '@/views/Element/AllRouter.vue')
    },
    {
        path: '/allvuex',
        name: 'allvuex',
        component: () => import(/* webpackChunkName: "AllVuex" */ '@/views/Element/AllVuex.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
	routes: routes
});

export default router;