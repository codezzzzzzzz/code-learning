// 封装 axios 做一些公共的配置，以及错误统一处理
import axios from 'axios'

axios.defaults.baseURL = 'http://114.55.4.120:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json' // 告诉浏览器后端返回的数据格式是 json 格式

// 请求拦截器
axios.interceptors.request.use(req => {
  let token = localStorage.getItem('token') || sessionStorage.getItem('token')
  if (token) {
    req.headers.Authorization = token
  }
  return req
})

// 响应拦截器
axios.interceptors.response.use(res => {
  if (res.status !== 200) { // 程序性错误
    ElMessage.error('服务器异常')
    return Promise.reject(res)
  } else {

    if (res.data.code === 401) { // 没有登录
      ElMessage.error(res.data.msg)
      return Promise.reject(res)
    }

    if (res.data.code !== 200) { // 业务错误
      ElMessage.error(res.data.msg)
      return Promise.reject(res)
    }

    return res.data
  }
})

export default axios