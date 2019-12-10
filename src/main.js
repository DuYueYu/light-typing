import Vue from 'vue';
import iView from 'iview';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import '../my-theme/index.less';
import store from "./vuex/vuex"
import router from './router/'
import components from './components/'

Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
})

Vue.use(iView);

//本地存储，将部分用户信息持久化：--------------------
var orignalSetItem = window.localStorage.setItem;
localStorage.setItem = function (key, newValue) {
    var setItemEvent = new Event("setItemEvent");
    setItemEvent.key = key;
    setItemEvent.newValue = newValue;
    orignalSetItem.apply(this, arguments);
    window.dispatchEvent(setItemEvent);
};

Vue.config.errorHandler = (error) => {
    console.log('错误：', error);
}

//根实例：--------------------------------
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});