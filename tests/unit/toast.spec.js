import {expect, assert} from 'chai'
import {mount,createWrapper} from "@vue/test-utils";
import Vue from 'vue'
import Toast from '@/components/toast/toast'
import sinon from 'sinon'

describe('Toast.vue', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {
        it('接收autoClose属性', (done) => {
            const wrapper = mount(Toast, {
                attachToDocument:true,
                propsData: {
                    autoClose: 1
                }
            })
            setTimeout(()=> {
                expect(document.body.contains(wrapper.vm.$el)).to.equal(false)
                done()
            }, 1500)
        })
        it('接收 CloseButton', () => {
            const callback = sinon.spy()
            const wrapper = mount(Toast, {
                propsData: {
                    closeButton: {
                        text: '点它点它',
                        callback,
                    }
                }
            })
            wrapper.find('.close').trigger('click')
            expect(wrapper.find('.close').text()).to.eq('点它点它')
            assert(callback.calledOnce);
        })
        it('接收 enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            const wrapper = createWrapper(vm)
            expect(wrapper.vm.$el.querySelector('#test')).to.exist
        })
        it('接收 position', ()=> {
            const wrapper = mount(Toast, {
                attachToDocument: true,
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.classes('position-bottom')).to.eq(true)
        })
    })
})
