import Mock from 'mockjs'

// const Random = Mock.Random

const users = {
  admin: {
    name: 'admin',
    password: '123456'
  },
  audit: {
    name: 'audit',
    password: '123456'
  }
}

// const listData = function () {
//   let _data = []
//   for (let i = 0; i < 20; i++) {
//     let newList = { // 详细 规则 参照mockjs官网
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       author_name: Random.cname(), // Random.cname() 随机生成中文名
//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     _data.push(newList)
//   }
//   return {_data: _data}
// }

// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
// 登录
Mock.mock('http://localhost:8900/project/login', 'post', config => {
  const { userName, password } = JSON.parse(config.body)
  const admin = users[userName]
  if (!admin) {
    return {
      errorCode: 0,
      message: '用户名不存在'
    }
  }
  if (users[userName].password !== password) {
    return {
      errorCode: 0,
      message: '密码错误'
    }
  }
  return {
    errorCode: 1,
    message: '登录成功',
    token: 'adminToken'
  }
})
