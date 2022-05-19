import Vue from 'vue'
import { Button, Layout, Icon, Menu, Drawer, Radio, FormModel, Input, message } from 'ant-design-vue'
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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
