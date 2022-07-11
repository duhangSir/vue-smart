import request from '@/untis/request'
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}
export default { getCaptcha }
