import Vue from 'vue'

function create(component,props){
    const vm = new Vue({
        // h 是 createElement 返回 Vnode 虚拟DOM
        // 需要挂载 $mount 才能变成真实的 dom
        render:h=>h(component,{props})
    }).$mount()
    // 不指定宿主元素，则会创建出真实的 dom ,但是不会追加操作

    document.body.appendChild(vm.$el)
    const comp = vm.$children[0]

    comp.remove = function(){
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}

export default create