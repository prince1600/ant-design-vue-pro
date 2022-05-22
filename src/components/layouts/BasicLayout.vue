<template>
  <div :class="`nav-theme-${navTheme}`">
    <a-layout id="components-layout" ref="layout">
      <a-layout-sider
        width="256"
        v-if="navLayout === 'left'"
        v-model="collapsed"
        :trigger="null"
        collapsible
        :theme="navTheme"
      >
        <div class="logo" style="font-size: 18px">
          <CustomIcon type="icon-antdesign" style="color: #fff;" /> Ant Design Pro
        </div>
        <SideMenu :navTheme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Header />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px',}"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
      <SettingDrawer></SettingDrawer>
    </a-layout>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import SideMenu from './SideMenu.vue'
import SettingDrawer from '../SettingDrawer'

export default {
  components: { Footer, Header, SideMenu, SettingDrawer },
  data() {
    return {
      collapsed: false,
      visible: false
    }
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || 'dark'
    },
    navLayout() {
      return this.$route.query.navLayout || 'left'
    }
  },
  methods: {
    afterVisibleChange() {},
    onClose() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
#components-layout {
  min-height: 100vh;
}
#components-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout .trigger:hover {
  color: #1890ff;
}

#components-layout .logo {
  height: 64px;
  line-height: 64px;
  text-align: center ;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  overflow: hidden;
}
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
.nav-theme-dark /deep/ .logo {
  color: #fff
}
</style>
