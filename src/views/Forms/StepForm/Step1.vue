<template>
  <div>
    <a-form :form="form">
      <a-form-item
        label="付款账户"
        :label-col="formLayout.labelCol"
        :wrapper-col="formLayout.wrapperCol"
      >
        <a-input
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
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-button @click="onSubmit" type="primary">下一步</a-button>
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
      const { form, $store, $router } = this
      form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          $store.commit({
            type: 'form/saveStepFormData',
            payload: values
          })
          $router.push('/form/step-form/confirm')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
