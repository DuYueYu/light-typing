import Vue from 'vue'
import iView from 'iview';
import Router from 'vue-router'
import routes from './routes'
import Util from '../libs/util';

Vue.use(Router)
Vue.use(iView)

const router = new Router({
    routes,
    mode: 'history',
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
})

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
})

// router.beforeEach(({ meta, path }, from, next) => {
//     const { auth = true } = meta
//     const isLogin = Boolean(localStorage.getItem('vue_cnode_accesstoken')) // true用户已登录， false用户未登录
//     if (auth && !isLogin && path !== '/login') {
//         let to = { path: '/login' }
//         return next(to)
//     }
//     next()
// })

export default router