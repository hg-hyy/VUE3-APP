import {
  customRef
} from "vue";
import axios from 'axios'

import {
  reactive
} from "vue";


var ins = axios.create({
  // baseURL: 'http://127.0.0.1:8002', //hyy
  // baseURL: 'http://192.168.20.130:41111', //pdv
  // baseURL: 'http://192.168.20.130:8910', //jry
  timeout: 1000,
});

// 添加请求拦截器
// ins.interceptors.request.use(cfg => {

//   // const token = localStorage.getItem('authtoken')
//   // if (token) {
//   //   cfg.headers = {
//   //     authtoken: token
//   //   }
//   // }

//   return cfg;
// }, error => {
//   return Promise.reject(error);
// });

// 添加响应拦截器
ins.interceptors.response.use(res => {
  return res;
}, error => {
  return Promise.reject(error);
});


export function useGetRef(value, url, param) {
  return customRef((track, trigger) => {
    ins({
        method: 'get',
        url: url,
        params: param,
        responseType: 'json'
      })
      .then((data) => {
        value = data.data.data;
        trigger();
      })
      .catch((err) => console.log("error:", err));
    return {
      get() {
        track();
        return reactive(value);
      },
      set(newvalue) {
        value = newvalue;
        trigger();
        return true;
      },
    };
  });
}

export function usePostRef(value, url, data) {

  return customRef((track, trigger) => {
    ins({
        method: 'post',
        url: url,
        data: data,
        responseType: 'json'
      })
      .then((data) => {
        value = data.data.data;
        trigger();
      })
      .catch((err) => console.log("error:", err));
    return {
      get() {
        track();

        return value;
      },
      set(newvalue) {
        value = newvalue;
        trigger();
      },
    };
  });
}