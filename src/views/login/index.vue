<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">
        用户登录
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="0px"
        class="ms-content"
        @submit.native.prevent
      >
        <el-form-item prop="userame">
          <el-input
            v-model="ruleForm.userName"
            placeholder="请输入用户名"
            class="touming"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="请输入密码"
            class="touming"
          />
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="primary"
            :disabled="disableLogin"
            @click="handleLogin"
          >
            登录
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { isPassword } from "@/utils/validate";

export default {
  name: "Login",
  data: function () {
    return {
      disableLogin: false,
      wrongTimes: 0,
      siteKey: sessionStorage.getItem('siteKey'),
      recaptchaCheck: false,
      ruleForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  mounted () {

  },
  methods: {




   async handleLogin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.ruleForm)
            .then(() => {
              const routerPath = this.redirect === "/404" ? "/" : this.redirect;
              this.$router.push({ path: routerPath || "/" }).catch(() => {});
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/login_images/login.png");
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
.touming >>> .el-input__inner {
  background-color: transparent;
  border: 1px solid #66e4ff;
  border-radius: 2px;
}

.ms-login {
  position: absolute;
  left: 60%;
  top: 30%;
  width: 350px;

  background-image: url("~@/assets/login_images/loginBack.png");
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
