<template>
  <div class="pay-container">
    <iframe
      id="skipHome"
      src="http://39.98.43.73:31300/back/zhgdjsp/dataManagement.jsp"
      frameborder="0"
      scrolling="auto"
      width="1920"
      height="1080"
    />
  </div>
</template>

<script>
  // import Step1 from "./components/Step1";
  // import Step2 from "./components/Step2";
  // import Step3 from "./components/Step3";
  export default {
    name: "DataManage",
    // components: { Step1, Step2, Step3 },
    data() {
      return {
        active: 1,
        form: {},
      };
    },
    mounted() {
      window.location.href = 'http://39.98.43.73:31300/back/zhgdjsp/dataManagement.jsp'
      if (window.history) {
       this.$router.push('/index')
      }

    },
    methods: {


    },
  };
</script>
<style lang="scss" scoped>
  .pay-container {
    height: 100%;
  }
</style>
