import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        storeMsg: 'hello!',
    },
    getters: {
        getStoreMsg (state) {
            console.log('getStoreMsg', state.storeMsg)
            return state.storeMsg;
        }
    },
    mutations: {
        setStoreMsg (state, payload) {
            console.log('setStoreMsg', payload);
            state.storeMsg = payload;
        },
    },
    actions: {
        callMutation ({ commit }, { newStoreMsg }) {
            console.log('callMutation', newStoreMsg)
            commit('setStoreMsg', newStoreMsg)
        }
    }
})

    
