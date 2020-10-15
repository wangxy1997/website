<template>
  <div class="index-vue">
    <!--侧边栏-->
    <div class="layout-left">
      <!--logo-->
      <div class="logo">
        <img src="../style/img/logo.png" alt="">
        <span>后台管理系统</span>
      </div>
      <!--菜单栏-->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vue"
        @open="handleOpen"
        @select="handleSelect"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/layout">
          <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!--右侧-->
    <div class="layout-right">
      <div class="lr-t">
      </div>
      <div class="lr-c">
        <transition>
          <router-view key="/layout"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      key: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // this.key = key
      this.$router.push(key)
      console.log(key)
      console.log(keyPath)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
