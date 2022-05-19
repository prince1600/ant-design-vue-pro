<template>
  <a-drawer
    title="Basic Drawer"
    placement="right"
    :closable="false"
    :visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="onClose"
    width="300"
  >
    <template v-slot:handle>
      <div class="handle" @click="visible = !visible">
        <a-icon :type="visible ? 'close' : 'setting'" class="setting"></a-icon>
      </div>
    </template>
    <h3>整体风格：</h3>
    <a-radio-group
      @change="e => handleSettingChange('navTheme', e.target.value)"
      :value="$route.query.navTheme || 'dark'"
    >
      <a-radio value="dark">黑色</a-radio>
      <a-radio value="light">白色</a-radio>
    </a-radio-group>

    <h3>导航模式：</h3>
    <a-radio-group
      @change="e => handleSettingChange('navLayout', e.target.value)"
      :value="$route.query.navLayout || 'left'"
    >
      <a-radio value="left">左侧</a-radio>
      <a-radio value="top">顶部</a-radio>
    </a-radio-group>
  </a-drawer>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: 'dark',
      navLayout: 'left'
    }
  },
  methods: {
    afterVisibleChange() {},
    onClose() {
      this.visible = false
    },
    handleSettingChange(type, val) {
      this.$router.push({ query: { ...this.$route.query, [type]: val } })
    }
  }
}
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  right: 300px;
  top: 300px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #1890ff;
  border-radius: 3px 0 0 3px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
</style>
