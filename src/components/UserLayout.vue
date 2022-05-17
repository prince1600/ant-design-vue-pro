<template>
  <div class="login-box">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #282A36;
  color: #fff;
  font-size: 20px;
}
</style>
