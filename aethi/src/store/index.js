
import Vue from 'vue';
import Vuex from 'vuex';
import kart from './modules/cart';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        cart: kart
    }
});

export default store;