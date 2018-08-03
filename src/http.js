import axios from "axios"


axios.defaults.timeout = 30000;//超时
axios.defaults.baseURL = 'http://localhost:3000';

//请求初始化配置

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.withCredentials = false;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
   
    return response;
}, function (error) {

    return Promise.reject(error.response);
});
export default axios;
