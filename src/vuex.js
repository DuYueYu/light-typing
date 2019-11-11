import Vue from 'vue';
import Vuex from 'vuex';
import product_data_from_server from './static/product.js';
Vue.use(Vuex);


function getFilterArray (array) {
    const res = [];
    const json = {};
    for (let i = 0; i < array.length; i++){
        const _self = array[i];
        if(!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}

const store = new Vuex.Store({
	state:{
		//打字课程：
		myLessonList:[],
		currentLessonId: 0,
		currentLessonStepId: 0,
		//购物：
		product_data: product_data_from_server,
		productList: [],
		cartList: []
	},
	getters:{
		//打字课程:
		
		//购物:
		brands: state => {
		    const brands = state.productList.map(item => item.brand);
		    return getFilterArray(brands);
		},
		colors: state => {
		    const colors = state.productList.map(item => item.color);
		    return getFilterArray(colors);
		}
	},
	mutations:{
		//打字课程：
		addLesson(state, id){
			state.myLessonList.push({
				id: id
			});
		},
		changCurrentLessonId(state, id){
			state.currentLessonId = id;
		},
		changCurrentLessonStepId(state, id){
			state.currentLessonStepId = id;
		},
		//购物：
		setProductList (state, data) {
		    state.productList = data;
		},
		addCart (state, id) {
		    const isAdded = state.cartList.find(item => item.id === id);
		    if (isAdded) {
		        isAdded.count ++;
		    } else {
		        state.cartList.push({
		            id: id,
		            count: 1
		        })
		    }
		},
		editCartCount (state, payload) {
		    const product = state.cartList.find(item => item.id === payload.id);
		    product.count += payload.count;
		},
		deleteCart (state, id) {
		    const index = state.cartList.findIndex(item => item.id === id);
		    state.cartList.splice(index, 1);
		},
		emptyCart (state) {
		    state.cartList = [];
		}
	},
	actions:{
		//购物：
		getProductList (context) {
		    setTimeout(() => {
		        context.commit('setProductList', product_data_from_server);
		    }, 500);
		},
		buy (context) {
		    return new Promise(resolve=> {
		        setTimeout(() => {
		            context.commit('emptyCart');
		            resolve();
		        }, 500)
		    });
		},
		//打字课程：
	}
});

export default store;