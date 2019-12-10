//路由表：
import Index from '../views/index';
import Portal from '../views/sportal/portal';
import Catalog from '../views/sportal/catalog';
import Lesson from '../views/lessons/lesson';
import Play from '../views/lessons/play';
import Shop from '../views/shop/shop';
import Cart from '../views/shop/cart';
import productDetail from '../views/shop/product-detail';
import Message from '../views/message/message';
import Login from '../views/login/login';

// auth = true需要登录才能访问，false不需要登录，默认true
export default [
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            auth: false,
        },
        component: Index
    },
    //课程路由：
    {
        path: '/sportal/portal',
        name: 'sportal-portal',
        meta: {
            title: 'Portal',
            auth: false,
        },
        component: Portal
    },
    {
        path: '/sportal/catalog',
        name: 'sportal-catalog',
        meta: {
            title: 'catalog',
            auth: false,
        },
        component: Catalog
    },
    {
        path: '/lessons/lesson',
        name: 'lessons-lesson',
        meta: {
            title: 'lesson',
            auth: false,
        },
        component: Lesson
    },
    {
        path: '/lessons/play',
        name: 'lessons-play',
        meta: {
            title: 'lesson',
            auth: false,
        },
        component: Play
    },
    //购物路由：
    {
        path: '/shop',
        name: 'shop',
        meta: {
            title: 'Shop',
            auth: false,
        },
        component: Shop
    },
    {
        path: '/cart',
        name: 'shop-cart',
        meta: {
            title: 'Cart',
            auth: false,
        },
        component: Cart
    },
    {
        path: '/product-detail/:id',
        name: 'product-detail',
        meta: {
            title: 'Product detail',
            auth: false,
        },
        component: productDetail
    },
    //消息路由：
    {
        path: '/message',
        name: 'message',
        meta: {
            title: 'Message',
            auth: true,
        },
        component: Message
    },
    //登陆路由：
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Log In',
            auth: false,
        },
        component: Login
    },
    {
        path: '*',
        meta: {
            title: '首页',
            auth: false,
        },
        component: Index
    }
];