import XButton from './components/button/button'
import XButtonGroup from './components/button/button-group'
import XCollapse from './components/collapse/collapse'
import XCollapseItem from './components/collapse/collapse-item'
import XCol from './components/grid/col'
import XRow from './components/grid/row'
import XIcon from './components/icon'
import XInput from './components/input'
import XLayout from './components/layout/layout'
import XContent from './components/layout/content'
import XFooter from './components/layout/footer'
import XHeader from './components/layout/header'
import XSider from './components/layout/sider'
import XPopover from './components/popover'
import XTabs from './components/tabs'
import XTabsBody from './components/tabs/tabs-body'
import XTabsHead from './components/tabs/tabs-head'
import XTabsItem from './components/tabs/tabs-item'
import XTabsPane from './components/tabs/tabs-pane'
import XToast from './components/toast'
import Plugin from './components/toast/toastPlugin'

const Components = [
    XButton,
    XButtonGroup,
    XCollapse,
    XCollapseItem,
    XCol,
    XRow,
    XIcon,
    XInput,
    XLayout,
    XContent,
    XFooter,
    XHeader,
    XSider,
    XPopover,
    XTabs,
    XTabsBody,
    XTabsHead,
    XTabsItem,
    XTabsPane
]
const install = Vue => {
    components.forEach(component => {
        component.install(Vue)
    })
    Vue.use(XToast)
    Vue.use(Plugin)
}


export { XToast, Plugin }
export default { install, XToast, Plugin }


