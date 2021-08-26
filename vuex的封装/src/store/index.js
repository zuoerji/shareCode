
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:1
    },
    getters:{
        getterCount(state){
            return state.count*3
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    },
    actions:{
        add({commit}){
            setTimeout(()=>{
                commit('add')
            },1000)
        }
    },
    modules:{}
})