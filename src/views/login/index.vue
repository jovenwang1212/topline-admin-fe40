<template>
  <div class="login-wrap">
    <div class="login-from-wrap">
      <div class="login-head">
        <img src="../../assets/images/logo_index.png"
             alt="">
      </div>
      <div class="login-form">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.mobile"
                      placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span="10">
              <el-input v-model="form.code"
                        placeholder="验证码"></el-input>
            </el-col>

            <el-col :span="10"
                    :offset="2">
              <el-button @click="handleSendCode">获取验证码</el-button>
            </el-col>

          </el-form-item>
          <el-form-item>
            <el-button class="login-btn"
                       type="primary"
                       @click="onSubmit">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import '../../vendor/gt'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        mobile: '15361819220',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleSendCode () {
      // console.log('ok')
      const { mobile } = this.form

      // 初始化验证码
      this.$axios.get(`http://ttapi.research.itcast.cn/mp/v1_0/captchas/${mobile}`)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #666;
  .login-from-wrap {
    background-color: #fff;
    padding: 50px;
    .login-head {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40%;
        padding: 25px;
      }
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
