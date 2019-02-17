import Toast from './toast.vue'

plugin.install = function (Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
        let Constructor = Vue.extend(Toast)
        let toast = new Constructor()
        toast.$slots.default = [message]
        toast.$mount()
        document.body.appendChild(toast.$el)
    }
}
