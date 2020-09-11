<template>
  <div class="loginBg">
    <!--雪花容器-->
    <div id="page_end_html"></div>
    <!--表单-->
    <div :class="login ? 'login test': 'login '">
      <p class="login_title">欢迎登录后台管理系统</p>
      <el-form class="login_form" ref="form" :model="form">
        <el-form-item :class="isName ? 'icon_opacity': ''">
          <!--点击透明度-->
          <i class="el-icon-user"></i>
          <!--input 聚焦和失去焦点-->
          <el-input @focus="isName = true" @blur="isName = false" class="login_input"
                    v-model="form.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item :class="ispassword ? 'icon_opacity': ''">
          <i class="el-icon-lock"></i>
          <el-input @focus="ispassword = true" @blur="ispassword = false" class="login_input"
                    v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item :class="isCode ? 'login_code icon_opacity': 'login_code'">
          <i class="el-icon-key"></i>
          <el-input @focus="isCode = true" @blur="isCode = false" class="login_input"
                    v-model="form.code" placeholder="验证码"></el-input>
          <!--验证码-->
          <canvas class="J_codeimg" id="myCanvas" @click="showCheck">{{ canvasTxt }}</canvas>
        </el-form-item>

        <button class="login_btn" @click="login = true"><span>登 录</span></button>
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
      // 表单参数
      isName: false,
      ispassword: false,
      isCode: false,
      CodeVal: '',
      form: {
        name: '',
        password: '',
        code: '',
      },
      // 验证码参数
      codeLength: 4,
      selectChar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      canvasTxt: '对不起，您的浏览器不支持canvas，请下载最新版浏览器!',
      login: false,
    }
  },
  mounted () {
    // 可定义点击的文字
    let arr = []
    editInfo(arr)
    // 获取验证码
    this.showCheck()
  },
  methods: {
    showCheck () {
      this.createCode()
      var c = document.getElementById('myCanvas')
      var ctx = c.getContext('2d')
      ctx.clearRect(0, 0, 1000, 1000)
      ctx.font = "80px 'Hiragino Sans GB'"
      ctx.fillStyle = '#E8DFE8'
      ctx.fillText(this.CodeVal, 0, 100)
    },
    // 生成验证码
    createCode () {
      this.CodeVal = ''
      // 验证码长度
      for (var i = 0; i < this.codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 56)
        this.CodeVal += this.selectChar[charIndex]
      }
    }
  }
}
</script>

<style scoped>
/*登录页背景*/
@import '../../style/css/login.css';

</style>
