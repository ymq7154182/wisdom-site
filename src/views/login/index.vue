<template>
  <div class="login-wrap">
    <div class="login_title">
      <p>智慧工地大数据管理系统</p>
    </div>
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
          <i class="iconfont iconuser" />
          <el-input
            v-model="ruleForm.userName"
            placeholder="用户名"
            class="touming"
          />
        </el-form-item>
        <el-form-item prop="password">
          <i class="iconfont iconmima" />
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
      siteKey: sessionStorage.getItem("siteKey"),
      recaptchaCheck: false,
      ruleForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    // var inputs = document.querySelectorAll(".touming input");
    // for (var item in inputs) {
    //   console.log(inputs[item]);
    //   console.log((inputs[item].placeholder.style.padding = "15px"));
    // }
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
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/login_images/login.png");
  background-size: 100%;
}
.login_title {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
}
.login_title p {
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 0.1em;
  font-size: 52px;
  font-weight: 700;
  background: linear-gradient(
    to bottom,
    rgb(236, 237, 243),
    rgb(174, 180, 207),
    rgb(157, 164, 197)
  );
  -webkit-background-clip: text;
  color: transparent;
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
  padding: 0 30px;
}

.ms-login {
  position: absolute;
  left: 60%;
  top: 33%;
  width: 400px;
  /* height: 350px; */
  background-image: url("~@/assets/login_images/loginBack.png");
  background-size: 100% 100%;
}
.ms-content {
  padding: 30px 30px;
}
.ms-content .iconuser {
  position: absolute;
  color: rgba(255, 255, 255, 0.74);
  padding: 0 4px 0 6px;
  font-size: 18px;
}
.ms-content .iconmima {
  position: absolute;
  color: rgba(255, 255, 255, 0.74);
  padding: 0 4px 0 6px;
  font-size: 18px;
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
