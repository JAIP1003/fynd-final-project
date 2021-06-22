import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);
const authstore = new Vuex.Store({
    modules:{
        auth: auth
    }
});

export default authstore;