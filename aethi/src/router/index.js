import Router from 'vue-router';


import AppHome from '@/components/AppHome';
import AdminHome from '@/components/AdminHome';
import AddProduct from '@/components/adminProducts/addProduct';
//import AppSearch from '@/components/AppSearch';
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
            name: 'adminHome',
            path: '/AdminHome',
            component: AdminHome
        },
        {
            name: 'addProduct',
            path: '/addProduct',
            component: AddProduct
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