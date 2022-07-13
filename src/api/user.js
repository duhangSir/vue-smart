import request from '@/untis/request'
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
const Login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&token=${data.token}&code=${data.code}`,
    method: 'POST'
  })
}
const getUserInfo = (data) => {
  return request({ url: '/user/info', method: 'GET' })
}
const getNav = (data) => {
  return request({ url: '/menu/nav', method: 'GET' })
}
export default { getCaptcha, Login, getUserInfo, getNav }
