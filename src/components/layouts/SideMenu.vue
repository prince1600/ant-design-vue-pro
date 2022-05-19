<template>
  <div style="width: 256px">
    <a-menu
      mode="inline"
      :theme="navTheme"
      :inline-collapsed="collapsed"
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <router-link :to="{ path: item.path }">
            <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from './SubMenu.vue'
import { checkAuthorization } from '@/utils/auth.js'
export default {
  components: { SubMenu },
  props: {
    navTheme: {
      type: String,
      required: true
    }
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes)
    return {
      collapsed: false,
      list: [],
      menuData,
      defaultOpenKeys: [],
      defaultSelectedKeys: []
    }
  },
  created() {
    this.defaultSelectedKeys = this.$route.matched.map(item => item.path)
    this.defaultOpenKeys = this.$route.matched.map(item => item.path)
  },
  methods: {
    getMenuData(routes) {
      const menuData = []
      for (let i = 0; i < routes.length; i++) {
        const item = routes[i]
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item }
          if (newItem?.meta?.authorization && !checkAuthorization(newItem.meta.authorization, this.$store.state.userInfo.userType)) {
            continue
          }
          delete newItem.children
          if (item.children && !item.hideChildMenu) {
            newItem.children = this.getMenuData(item.children)
          }
          menuData.push(newItem)
        } else if (item.children && !item.hideInMenu && !item.hideChildMenu) {
          menuData.push(...this.getMenuData(item.children))
        }
      }
      return menuData
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less" scoped></style>
