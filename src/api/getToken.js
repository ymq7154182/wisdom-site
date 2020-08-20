import request from "@/utils/request";

export function getLoginToken() {
  return request({
    url: "http://39.98.43.73:31300/login/doLogin.do?loginname=320621198202220745&password=abc@12345&validateChart=",
    method: "post",
  });
}
