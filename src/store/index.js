import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload.userInfo
    }
  },
  actions: {
  },
  modules: {
    form
  }
})
