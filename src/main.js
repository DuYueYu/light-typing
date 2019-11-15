import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import axios from './libs/axios.js';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';
import FooterLightTyping from './components/FooterLightTyping.vue';
import HeadLightTyping from './components/HeaderLightTyping.vue';
import LessonCard from './components/LessonCard.vue';
import store from "./vuex.js"
import Keyboard from "./components/Keyboard.vue"

Vue.use(VueRouter);
Vue.use(iView);
Vue.component("FooterLightTyping", FooterLightTyping);
Vue.component('HeadLightTyping', HeadLightTyping);
Vue.component('LessonCard', LessonCard);
Vue.component('Keyboard', Keyboard);


//vue-router---------------------------
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


//本地存储，将部分用户信息持久化：--------------------
var orignalSetItem = window.localStorage.setItem;
localStorage.setItem = function (key, newValue) {
    var setItemEvent = new Event("setItemEvent");
    setItemEvent.key = key;
    setItemEvent.newValue = newValue;
    orignalSetItem.apply(this, arguments);
    window.dispatchEvent(setItemEvent);
};


//根实例：--------------------------------
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
