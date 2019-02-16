import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Row from '@/components/grid/row'
import Col from '@/components/grid/col'


describe('Row.vue', () => {
    it('存在', () => {
        expect(Row).to.exist
    })
    it('接收gutter', () => {
        Vue.component('x-row', Row)
        Vue.component('x-col', Col)
        const Component = {
            template: ' <x-row gutter="20"><x-col span="12"></x-col><x-col span="12"></x-col></x-row>'
        }
        const wrapper = mount(Component)
        expect(wrapper.find('.row').element.style.marginLeft).to.equal('-10px')
        expect(wrapper.find('.row').element.style.marginRight).to.equal('-10px')
        expect(wrapper.findAll('.col').at(0).element.style.paddingLeft).to.equal('10px')
        expect(wrapper.findAll('.col').at(1).element.style.paddingRight).to.equal('10px')
    })
    it('接收align属性', () => {
        const wrapper = mount(Row, {
            attachToDocument: true,
            propsData: {
                align: 'center'
            }
        })
        expect(wrapper.classes('align-center')).to.equal(true)
    })
})
