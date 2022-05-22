<template>
  <div>
    <a-form :form="form">
      <a-form-item
        label="付款账户"
        :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol"
      >
        <a-input
          disabled
          placeholder="请输入付款账号"
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [{ required: true, message: '请输入付款账号' }]
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        label="付款密码"
        :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol"
      >
        <a-input
          placeholder="请输入付款密码"
          v-decorator="[
            'payPass',
            {
              rules: [{ required: true, message: '请输入付款密码' }]
            }
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-button @click="$router.push('/form/step-form/info')" style="margin-right: 20px">上一步</a-button>
        <a-button @click="onSubmit" type="primary">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this, 'form')
    return {
      formLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  computed: {
    step() {
      return this.$store.state.form.step
    }
  },
  methods: {
    onSubmit() {
      const { form, $store, $router, step } = this
      form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          $store.dispatch({
            type: 'form/submitStepForm',
            payload: {
              ...step,
              ...values
            }
          })
          $router.push('/form/step-form/result')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
