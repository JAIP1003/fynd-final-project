import Router from 'vue-router';


import AppHome from '@/components/AppHome';
import AdminHome from '@/components/AdminHome';
import AddProduct from '@/components/adminProducts/addProduct';
import AppLogin from '@/components/AppLogin';
import AppSignup from '@/components/AppSignup';
import AppCart from '@/components/AppCart';
import AppPageNotFound from '@/components/PageNotFound';


import authstore from '@/store/authStore';


const meta ={
    authorize:[]
};

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome,
            meta
        },
        {
            name: 'adminHome',
            path: '/adminHome',
            component: AdminHome,
            meta
        },
        {
            name: 'addProduct',
            path: '/addProduct',
            component: AddProduct,
            meta
        },
        {
            name: 'cart',
            path: '/cart',
            component: AppCart,
            meta
        },
        {
            name: 'login',
            path: '/login',
            component: AppLogin
        },
        {
            name: 'signup',
            path: '/signup',
            component: AppSignup
        },
        {
            name: 'page-not-found',
            path: '*',
            component: AppPageNotFound
        },
    ]
});


router.beforeEach(( to, from, next ) => {
    if( to.meta.authorize && !authstore.getters.isAuthenticated ){
        next({
            name: 'login'
        });
    } else {
        next();
    }
});

export default router;