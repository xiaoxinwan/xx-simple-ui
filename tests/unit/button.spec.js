import { expect } from 'chai'
import Vue from 'vue'
import '../../src/components/iconfont'
import Button from '../../src/components/button'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.exist
    })
})
