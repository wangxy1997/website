import { baseUrl } from '@/utils/global'

export default {
  method: 'get',
  baseUrl: baseUrl,
  // 请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 请求超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json'

}
