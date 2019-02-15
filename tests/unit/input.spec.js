import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Input from '@/components/input/input.vue'

describe('Input.vue', () => {
    it('存在', ()=> {
        expect(Input).to.exist
    })

    it('可以接收value', () => {
        const wrapper = mount(Input, {
            propsData: {
                value: '123'
            }
        })
        expect(wrapper.find('input').element.value).to.eq('123')
    })

    it('可以接收disabled', () => {
        const wrapper = mount(Input, {
            propsData: {
                disabled: true
            }
        })
        const vm = wrapper.vm
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
    })

    it('可以接收readonly', () => {
        const wrapper = mount(Input, {
            propsData: {
                readonly: true
            }
        })
        expect(wrapper.props('readonly')).to.equal(true)
    })

    it('可以接收error', () => {
        const wrapper = mount(Input, {
            propsData: {
                error: '错了'
            }
        })
        expect(wrapper.find('svg').classes('icon-error')).to.equal(true)
        expect(wrapper.find('.error-message').text()).to.equal('错了')
    })
})
