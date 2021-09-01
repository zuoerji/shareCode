
let Vue;
class ZuoRouter{
    constructor(options){
        this.$options = options
        // 响应式数据
        Vue.util.defineReactive(this,'currentPath','/')
        window.addEventListener('hashchange',this.hashChange.bind(this))
        window.addEventListener('load',this.hashChange.bind(this))

        this.routeMap = {}
        options.routes.forEach(route=>{
            this.routeMap[route.path] = route
        })
    }
    hashChange(){
        this.currentPath = location.hash.slice(1)
    }
}
ZuoRouter.install = function(_Vue){
    Vue = _Vue
    // 混入
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    Vue.component('router-link',{
        props:['to'],
        render(h){
            // 参数1：标签名
            // 参数2：属性名
            // 参数3：子级
            return h('a',{attrs:{href:'#'+this.to},class:'router-link'},this.$slots.default)
        }
    })
    Vue.component('router-view',{
        render(h){
            let {routeMap,currentPath} = this.$router
            let component = routeMap[currentPath].component||null
            // this.$router.$options.routes.forEach(route=>{
            //     if(route.path === this.$router.currentPath){
            //         component = route.component
            //     }
            // })
            return h(component)
        }
    })
}

export default ZuoRouter