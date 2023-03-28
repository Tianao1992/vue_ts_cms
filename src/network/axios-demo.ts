import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'

axios.defaults.timeout = 10000
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

// axios
//   .get('http://123.207.32.32:8000/home/multidata', {
//     params: {
//       name: 'why',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('http://123.207.32.32:8000/home/multidata', {
//     params: {
//       name: 'why',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// new Promise<string>((resolve, reject) => {
//   resolve('abc')
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use((config) => {
  console.log('请求拦截成功')

  return config
})
axios.interceptors.response.use((res) => {
  console.log('响应拦截成功')
  return res
})
