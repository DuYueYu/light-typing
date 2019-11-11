const routers = [
    {
        path: '/',
        meta: {
            title: 'Light Typing'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
	//课程路由：
	{
	    path: '/sportal/portal',
	    meta: {
	        title: 'Portal'
	    },
	    component: (resolve) => require(['./views/sportal/portal.vue'], resolve)
	},
	{
	    path: '/sportal/catalog',
	    meta: {
	        title: 'catalog'
	    },
	    component: (resolve) => require(['./views/sportal/catalog.vue'], resolve)
	},
	{
	    path: '/lessons/lesson',
	    meta: {
	        title: 'lesson'
	    },
	    component: (resolve) => require(['./views/lessons/lesson.vue'], resolve)
	},
	{
	    path: '/lessons/play',
	    meta: {
	        title: 'lesson'
	    },
	    component: (resolve) => require(['./views/lessons/play.vue'], resolve)
	},
	//购物路由：
	{
	    path: '/shop',
	    meta: {
	        title: 'Shop'
	    },
	    component: (resolve) => require(['./views/shop.vue'], resolve) 	
	},
	{
	    path: '/cart',
	    meta: {
	        title: 'Cart'
	    },
	    component: (resolve) => require(['./views/cart.vue'], resolve) 	
	},
	{
	    path: '/product-detail/:id',
	    meta: {
	        title: 'Product detail'
	    },
	    component: (resolve) => require(['./views/product-detail.vue'], resolve) 
	},
	//消息路由：
	{
	    path: '/message',
	    meta: {
	        title: 'Message'
	    },
	    component: (resolve) => require(['./views/message.vue'], resolve)
	},
	//登陆路由：
	{
	    path: '/login',
	    meta: {
	        title: 'Log In'
	    },
	    component: (resolve) => require(['./views/login.vue'], resolve)
	},
	{
	    path: '*',
	    meta: {
	        title: ''
	    },
	    component: (resolve) => require(['./views/index.vue'], resolve)
	}
];
export default routers;