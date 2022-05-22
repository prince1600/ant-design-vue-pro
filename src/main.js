import Vue from 'vue'
import {
  Button,
  Layout,
  Icon,
  Menu,
  Drawer,
  Radio,
  FormModel,
  Input,
  message
} from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Input)
Vue.use(FormModel)
Vue.use(message)

const CustomIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3415492_pgdics7iep.js' // 在 iconfont.cn 上生成
})
Vue.component('CustomIcon', CustomIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
