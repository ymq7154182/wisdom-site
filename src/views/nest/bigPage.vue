<template>
  <div class="pay-container">
    <iframe
      id="skipHome"
      src="http://39.98.43.73:31300/back/zhgdjsp/homePage.jsp"
      frameborder="0"
      scrolling="auto"
      style="width: 100%;height: 100%;"
    />
  </div>
</template>

<script>
  // import Step1 from "./components/Step1";
  // import Step2 from "./components/Step2";
  // import Step3 from "./components/Step3";
  export default {
    name: "Pay",
    // components: { Step1, Step2, Step3 },
    data() {
      return {
        active: 1,
        form: {},
      };
    },
    mounted() {


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
