import Router from 'vue-router';


import AppHome from '@/components/AppHome';
import AppSearch from '@/components/AppSearch';
import AppCart from '@/components/AppCart';
import AppPageNotFound from '@/components/AppPageNotFound';


const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'search',
            path: '/search',
            component: AppSearch
        },
        {
            name: 'cart',
            path: '/cart',
            component: AppCart
        },
        {
            name: 'page-not-found',
            path: '*',
            component: AppPageNotFound
        },
    ]
});

export default router;