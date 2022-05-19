<template>
  <a-form-model
    ref="loginForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    class="loginForm"
  >
    <a-form-model-item label="账号">
      <a-input v-model.trim="form.account" placeholder="input account" />
    </a-form-model-item>
    <a-form-model-item label="密码">
      <a-input v-model="form.pwd" placeholder="input password" type="password" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ offset: 4 }">
      <a-button type="primary" @click="login"> Submit </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import message from 'ant-design-vue/lib/message'
import { getUserInfo } from '@/utils/auth'
const rules = {}
Object.freeze(rules)

export default {
  data() {
    return {
      form: {
        account: '',
        pwd: ''
      },
      rules
    }
  },
  methods: {
    login() {
      const { account, pwd } = this.form
      if (account === 'admin' && pwd === '12345') {
        localStorage.setItem('token', 'aa.bb.cc')
        const userInfo = getUserInfo()
        console.log('userInfo', userInfo)
        this.$store.commit('setUserInfo', { userInfo })
        console.log(this.$store.state)
        this.$router.push('/dashboard/analysis')
      } else {
        message.error('用户名或密码错误')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loginForm {
  // background-color: #fff;
  width: 300px;
}
/deep/ .ant-btn-primary {
  width: 250px;
  background-color: #853cf6;
  border-color: #fff;
}
/deep/ .ant-form-item-label > label {
  color: #fff;
}
</style>
