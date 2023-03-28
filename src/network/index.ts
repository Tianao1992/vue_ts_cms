import HYRequest from './requset'

import { BASE_URL } from './requset/config'
import LocalCache from '@/utils/cache'
const tRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  showLoading: true,
  interceptors: {
    //实例拦截器
    requestInterceptor: (config) => {
      console.log('实例拦截器')
      const token = LocalCache.getCache('token')
      if (config.headers && token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(error) {
      console.log('实例请求响应失败')
      return error
    },
    responseInterceptor(res) {
      console.log('实例请求响应拦截成功')
      return res
    },
    responseInterceptorCatch(error) {
      console.log('请求响应失败')

      return error
    }
  }
})

export default tRequest
