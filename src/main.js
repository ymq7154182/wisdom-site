import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import VueJsonp from 'vue-jsonp'
import "./plugins";

if (process.env.NODE_ENV === "test") {
  const { mockXHR } = require("../mock/static");
  mockXHR();
}
Vue.use(VueJsonp)

Vue.config.productionTip = false;

new Vue({
  el: "#vue-admin-beautiful",
  router,
  store,
  render: (h) => h(App),
});
