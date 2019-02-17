import Toast from './toast.vue'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, toastOptions) => {
            if (currentToast) {
                currentToast.closeToast()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('closeToast', onclose)
    document.body.appendChild(toast.$el)
    return toast
}

