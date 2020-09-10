<template>
  <div class="loginBg">
    <!--雪花容器-->
    <div id="page_end_html"></div>
    <div class="login">
11111
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
