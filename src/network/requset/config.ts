let BASE_URL = ''
const BASER_NAME = 'LISI'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://test.com/prod'
}

export { BASE_URL, BASER_NAME }
