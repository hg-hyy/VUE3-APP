//src/utils/request.js 
import axios from 'axios' // 创建 axios 实例 
const service = axios.create({
    baseURL: 'http://127.0.0.1:8002', // url = base url + request url process.env.VUE_APP_BASE_URL 
    timeout: 10000, // request timeout 
})
// 请求拦截器 
service.interceptors.request.use(config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Accept'] = 'application/json'
        config.headers['Authorization'] = token['access_token']

        return config
    },
    (error) => {
        return Promise.reject(error)
    })
// 响应拦截器 
service.interceptors.response.use((response) => {
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
            err_msg: error.response.data.message
        }
        return Promise.reject(msg)
    })
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'post',
            url: url,
            data: data,
            responseType: 'json'
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        });
    })
};
const get = (url, params) => {
    return new Promise((resolve, reject) => {
        service({
            method: 'get',
            url: url,
            params: params,
            responseType: 'json'
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
export default {
    post,
    get
};