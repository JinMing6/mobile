import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home'
import Classify from '@/views/Classify'
import ShopCart from '@/views/ShopCart'
import Mine from '@/views/Mine'
import Search from '@/views/Search'
import Details from '@/views/Details'
import Demo from '@/views/Demo'
import NotFount from '@/views/NotFount'

const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/shopCart',
        component: ShopCart
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/details/:id',
        component: Details
    },
    {
        path: '/demo',
        component: Demo
    },
    {
        path: '/:catchAll(.*)',
        component: NotFount
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;