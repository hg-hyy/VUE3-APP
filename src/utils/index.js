import {
  customRef,
  reactive
} from "vue";
import axios from 'axios'
var ins = axios.create({
  baseURL: 'http://127.0.0.1:8002',
  // baseURL: 'http://192.168.20.130:8910',
  timeout: 20000,
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
// ins.interceptors.response.use(res => {
//   return res;
// }, error => {
//   return Promise.reject(error);
// });

ins.interceptors.response.use((response) => {
    //届时根据后端返回success或者code值判断 
    return response
  },
  (error) => {
    //响应错误 
    let status = error.response.status
    //固定 
    if (status === 400) {
      //Message.error('参数错误') 
    }
    if (status === 401) {
      //Message.error('登录过期,请重新登录') 
    }
    if (status === 403) {
      //Message.error('没有权限') 
    }
    if (status === 404) {
      // Message.error('接口路径错误') 
    }
    if (status === 500) {
      //Message.error('服务器出错') 
    }
    if (status === 503) {
      //Message.error('服务器在维护') 
    }
    let msg = {
      status: status,
      err_msg: error.response.statusText
    }
    return Promise.reject(msg)
  })


export async function useGetRef(value, url, param) {
  await ins({
      method: 'get',
      url: url,
      params: param,
      responseType: 'json'
    })
    .then((data) => {
      value = data.data.data;
    })
    .catch((err) => value = err);
  return customRef((track, trigger) => {

    return {
      get() {
        track();
        trigger();
        return value;
      },
      set(newvalue) {
        value = newvalue;
        trigger();
        return true;
      },
    };
  });
}
export async function useGetRefST(value, url, param) {
  await ins({
      method: 'get',
      url: url,
      params: param,
      responseType: 'json'
    })
    .then((data) => {
      value = data.data;
    })
    .catch((err) => value = err);
  return customRef((track, trigger) => {

    return {
      get() {
        track();
        trigger();
        return value;
      },
      set(newvalue) {
        value = newvalue;
        trigger();
        return true;
      },
    };
  });
}

export async function usePostRef(value, url, data) {
  await ins({
      method: 'post',
      url: url,
      data: data,
      responseType: 'json'
    })
    .then((data) => {
      value = data.data.data;
    })
    .catch((err) => value = err);
  return customRef((track, trigger) => {

    return {
      get() {
        track();
        trigger();
        return value;
      },
      set(newvalue) {
        value = newvalue;
        trigger();
      },
    };
  });
}
export async function usePostRefST(value, url, data) {
  await ins({
      method: 'post',
      url: url,
      data: data,
      responseType: 'json'
    })
    .then((data) => {
      value = data.data;
    })
    .catch((err) => value = err);
  return customRef((track, trigger) => {

    return {
      get() {
        track();
        trigger();
        return value;
      },
      set(newvalue) {
        value = newvalue;
        trigger();
      },
    };
  });
}