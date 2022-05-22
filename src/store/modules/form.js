import router from '../../router/index'

const state = {
  step: {
    payAccount: 'gqs@qq.com'
  }
}

const actions = {
  async submitStepFrom({ commit }, { payload }) {
    const data = await new Promise((resolve) => {
      resolve({
        code: 200
      })
    })
    if (data.code !== 200) return
    commit('saveStepFormData', payload)
    router.push('/form/step-form/result')
  }
}

const mutations = {
  saveStepFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
