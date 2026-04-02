import axios from 'axios'
import { showFailToast } from 'vant'
import router from '@/router/index.js'

axios.defaults.baseURL = 'http://121.43.166.28:7009'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 将一个能证明身份的东西放在请求头中
axios.defaults.headers['Authorization'] = localStorage.getItem('token') || null
axios.defaults.headers.post['Content-Type'] = 'application/json'


// 响应拦截器 （该项目中每一个请求发出去后，后端发回来的响应都会先走这里）
axios.interceptors.response.use(res => {
  // 每个接口的错误情况统一处理
  if (typeof (res.data) !== 'object') {
    showFailToast('服务端异常！请稍候重试')
    return Promise.reject(res)
  }

  if (res.data.code !== 200) { // 
    if (res.data.msg) showFailToast(res.data.msg)

    if (res.data.code === 401) { // 未登录
      // 跳转到登录页

    }

    // return Promise.reject(res.data)
  }

  return res.data
})

export default axios
