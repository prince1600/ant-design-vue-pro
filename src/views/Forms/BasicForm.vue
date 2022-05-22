<template>
  <div>
    <a-form :layout="formLayout" :form="form">
      <a-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
          <a-radio-button value="horizontal"> Horizontal </a-radio-button>
          <a-radio-button value="vertical"> Vertical </a-radio-button>
          <a-radio-button value="inline"> Inline </a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        label="办学类型"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-select
        placeholder="选择办学类型"
        v-decorator="['type',{initialValue: 0}]"
        :options="[{label: '全日制', value: 1}, {label: '非全日制', value: 0}]"
        />
      </a-form-item>
      <a-form-item
        label="课时标准"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
        placeholder="input placeholder"
        v-decorator="['classUnit', {rules: [{required: true, message: '请输入课时标准'}, {validator: validateClassUnit}]}]"
        />
      </a-form-item>
      <a-form-item
        label="住宿标准"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        v-if="form.getFieldsValue().type"
      >
        <a-input
        placeholder="input placeholder"
        v-decorator="['hotelUnit', {rules: [{required: true, message: '请输入住宿标准'},]}]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="onSubmit"> Submit </a-button>
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="form.resetFields()"> Reset </a-button>
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="fill"> Fill </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this, 'form'),
      formLayout: 'horizontal'
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this
      return formLayout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
        : {}
    },
    buttonItemLayout() {
      const { formLayout } = this
      return formLayout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 }
        }
        : {}
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value
    },
    onSubmit() {
      console.log(this.form.getFieldsValue().type)
    },
    validateClassUnit(rule, value, callbackFn) {
      const type = this.form.getFieldsValue().type
      console.log(type)
      if (type === 0) {
        if (value - 0 < 10) {
          callbackFn('不能小于10')
        }
      }
      if (type === 1) {
        if (value - 0 < 100) {
          callbackFn('不能小于100')
        }
      }
      // callback()
    },
    fill() {
      const data = {
        type: 0,
        classUnit: 10
      }
      this.form.setFieldsValue(data)
    }
  }
}
</script>

<style></style>
