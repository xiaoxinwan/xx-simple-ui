import {expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
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
    // it('icon默认的order是1', () => {
    //     const wrapper = mount(Button,{
    //         attachToDocument: true,
    //         propsData: {
    //             icon: 'setting'
    //         }
    //     })
    //     const vm = wrapper.vm
    //     const icon = vm.$el.querySelector('.x-icon')
    //     expect(wrapper.contains('.icon')).to.exist
    //     expect(wrapper.contains('use')).to.exist
    //     console.dir(icon.attributes);
    //     console.log(window.getComputedStyle(icon));
    //
    //     expect(window.getComputedStyle(icon).order).to.eq('1')
    // });
    it('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        console.log(getComputedStyle(icon));
        expect(getComputedStyle(icon, null).getPropertyValue('margin-right')).to.eq('2')
    })
})
