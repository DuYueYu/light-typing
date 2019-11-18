import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';
import FooterLightTyping from './components/FooterLightTyping';
import HeadLightTyping from './components/HeaderLightTyping';
import LessonCard from './components/LessonCard';
import store from "./vuex.js"
import Key from "./components/Key"
import Keyboard from "./components/Keyboard"
import VideoController from './components/VideoController'
import TypingController from "./components/TypingController"
import GameController from './components/GameController'

Vue.use(VueRouter);
Vue.use(iView);
Vue.component("FooterLightTyping", FooterLightTyping);
Vue.component('HeadLightTyping', HeadLightTyping);
Vue.component('LessonCard', LessonCard);
Vue.component('Key', Key);
Vue.component('Keyboard', Keyboard);
Vue.component('VideoController', VideoController);
Vue.component('TypingController', TypingController);
Vue.component('GameController', GameController);

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
