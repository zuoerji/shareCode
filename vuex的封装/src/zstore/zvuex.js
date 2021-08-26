
let Vue;

class Store{
    constructor(options){
        this.options = options
        this._mutations = options.mutations
        this._actions = options.actions
        this._getters = options.getters
        const store = this
        const computed = {}
        this.getters = {}
        Object.keys(this._getters).forEach(getter=>{
            const fn = store._getters[getter]
            computed[getter] = function(){
                return fn(store.state)
            }
            Object.defineProperty(store.getters,getter,{
                get:()=> store.state[getter]
            })
        })
        this.state = new Vue({
            data:options.state,
            computed
        })
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    commit(type,payload){
        const fn = this._mutations[type]
        if(fn){
            fn(this.state,payload)
        }
    }
    dispatch(type,payload){
        const fn = this._actions[type]
        if(fn){
            fn(this,payload)
        }
    }
}

function install(_Vue){
    // 混入
    Vue = _Vue
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                _Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default{
    Store,
    install
}