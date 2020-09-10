<template>
  <div class="loginBg">
    <!--雪花容器-->
    <div id="page_end_html"></div>
    <div class="login">
      <p class="login_title">欢迎登录后台管理系统</p>
      <el-form class="login_form" ref="form" :model="form">
        <el-form-item>
          <i :class="isName ? 'el-icon-user': 'icon_opacity el-icon-user'"></i>
          <el-input @focus="isName = true" @blur="isName = false" class="login_input"
                    v-model="form.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <i :class="ispassword ? 'el-icon-lock': 'icon_opacity el-icon-lock'"></i>
          <el-input @focus="ispassword = true" @blur="ispassword = false" class="login_input"
                    v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>

          <button><span>登 录</span></button>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/style/js/jquery-2.2.0.min.js'
import { editInfo } from '@/style/js/TS_❤.js'
import '@/style/js/explode.js'
export default {
  name: 'index',
  components: { editInfo },
  data () {
    return {
      isName: false,
      ispassword: false,
      form: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
    let arr = ''
    editInfo(arr)
  },
  methods: {
  }
}
</script>

<style scoped>
@import '../../style/css/login.css';

</style>
