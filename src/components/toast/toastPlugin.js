import Toast from './toast.vue'

export default {
    install(Vue) {
        Vue.prototype.$toast = (message) => {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}

