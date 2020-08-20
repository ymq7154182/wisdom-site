<template>
  <div class="pay-container">
    <!--<iframe-->
    <!--id="skipHome"-->
    <!--src="http://39.98.43.73:31300/back/zhgdjsp/homePage.jsp"-->
    <!--frameborder="0"-->
    <!--scrolling="auto"-->
    <!--width="1920"-->
    <!--height="1080"-->
    <!--/>-->
  </div>
</template>

<script>
  import axios from "axios";
  import { getLoginToken } from "@/api/getToken";
  export default {
    name: "Shouye",
    // components: { Step1, Step2, Step3 },
    data() {
      return {
        active: 1,
        form: {},
      };
    },
    created() {

      // var _this = this
      // var oFrm = document.getElementById('skipHome');
     // if (oFrm.readyState === 'interactive') {
     //
     // }
     //  oFrm.onload = function () {
     //    console.log('加载完成1')
     //    _this.handleLogin()
     //  }
     //  oFrm.location.href="http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345";



    },
    mounted() {
      // this.handleLogin()
      // window.location.href = 'http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345'
      window.location.href = 'http://39.98.43.73:31300/back/zhgdjsp/homePage.jsp'
      if (window.history) {
       this.$router.push('/index')
      }

      // history.go(-1)
      console.log(1)
      //this.jsonp()
      // getLoginToken().then((res) => {
      //   console.log(111)
      // });

      // http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345
      // 先请求下登陆


    },
    methods: {
      changeFrameHeight(){
        console.log(2)
        var ifm= document.getElementById("skipHome");
        ifm.height=document.documentElement.clientHeight;
      },
      stateChange() {

      },
      // jsonp(callback = "callback") {
      //   var url = "http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345"


      //   let script = document.createElement("script");
      //   script.src = url
      //   document.body.appendChild(script);
      //   return new Promise((resolve, reject) => {
      //     window[callback] = () => {
      //       try {
      //         resolve();
      //       } catch (e) {
      //         reject(e);
      //       } finally {
      //         script.parentNode.removeChild(script);
      //       }
      //     };
      //   });
      // }

      handleLogin() {
        // console.log(121212)
        this.$jsonp('http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345&validateChart=').then(res => {
          console.log(res)
          // console.log(this.callbackName)
          // console.log(223)
        }).catch(err => {
          console.log(err)
        })
        var url = 'http://39.98.43.73:31300/login/doLogin.do'
        axios.post(url, {
          loginname: '320621198202220745',
          password: 'abc@12345',
          validateChart: ''
        }).then((res) => {

        })
        },
    }
}
</script>
<style lang="scss" scoped>
.pay-container {
}
</style>
