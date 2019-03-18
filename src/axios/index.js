import axios from 'axios'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(function(config) {
    console.log("请求之前拦截：%o",config);
})

export default axios.create({});