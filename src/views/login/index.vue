<template>
  <div class="login-container">
    <div class="login-table">
      <h1>智慧服务平台</h1>
      <h2>欢迎登录</h2>
      <div class="login-form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model.trim="ruleForm.username"
              placeholder="请输入账号"
              suffix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="ruleForm.password"
              placeholder="请输入密码"
              clearable
              show-password
              suffix-icon="el-icon-s-goods"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <div class="el-form-input">
              <el-input
                class="el-code"
                v-model.trim="ruleForm.code"
                placeholder="请输入验证码"
              ></el-input>
              <div class="el-Image">
                <img :src="captchaImg" @click.stop="switchImg" />
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              :loading="loadingStatus"
              >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      loadingStatus: false,
      ruleForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      captchaImg: '',
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    switchImg() {
      this.getCaptcha()
      this.ruleForm.code = ''
    },
    async getCaptcha() {
      const response = await this.$store.dispatch('user/getCaptcha')
      this.captchaImg = response.captchaImg
      this.ruleForm.token = response.token
    },
    async submitForm(ruleForm) {
      this.$refs[ruleForm].validate(async (val) => {
        if (val) {
          this.loadingStatus = true
          const response = await this.$store.dispatch(
            'user/Login',
            this.ruleForm
          )
          if (response) {
            this.$notify({
              title: '提示',
              message: '登录成功',
              type: 'success'
            })
            this.$router.push('/')
          } else {
            this.loadingStatus = false
          }
        } else {
          console.log('失败')
        }
      })
    }
  },
  created() {
    this.loadingStatus = false
    this.getCaptcha()
  }
}
</script>
<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  background: url('http://zh.9yuecloud.com/img/bg.970bc3a9.jpg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  position: relative;
  .login-table {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    h1 {
      text-align: center;
      font-weight: 500;
      font-size: 40px;
      margin: 40px 0 160px 0;
    }
    h2 {
      font-weight: 500;
      margin-bottom: 20px;
    }
    .login-form {
      width: 340px;
    }
    .el-form-input {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      .el-code {
        width: 80%;
        margin-right: 10px;
      }
      .el-Image {
        width: 50%;
        height: 40px;
        cursor: pointer;
        img {
          width: 100%;
          height: 40px;
        }
      }
    }
    .el-button {
      width: 100%;
      background-color: #f56c6c;
      border: none;
    }
  }
}
</style>
