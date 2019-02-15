import {expect,should} from 'chai'
import {mount} from '@vue/test-utils'
import Button from '../../src/components/button'



describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.exist
    })
    it('可以设置icon', function () {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-setting')
    })
    it('可以设置loading', () => {
        const wrapper = mount(Button, {
            propsData: {
                loading: true
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    });
    it('点击button触发click事件 ', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'setting'
            }
        })
        wrapper.trigger('click')
        expect(wrapper.emitted().click).to.be.ok
    })
})
