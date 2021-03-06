/**
 * 用户相关请求模块
 */
import request from '@/utils/request'


// 在非组件模块中获取 store 必须通过这种方式
// 这里单独加载 store 和 在 组件中 this.$store 是一个东西 
// import store from '@/store/'

/**
 * 登录/注册
 */ 
export const login = data => {
    return request({
      method: 'POST',
      url: '/app/v1_0/authorizations',
      data
    })
}

export const regist = data => {
    return request({
      method: 'POST',
      url: 'http://localhost:88/api/consumer/register',
      data
    })
}

/**
 * 发送短信验证码   参数 mobile
 */
export const sendSms = mobile => {
    return request({
      method: 'GET',
      // url: `http://www.tuling.com/api/consumer/code/${mobile}`
      url: `http://www.tuling.com:88/api/consumer/code/${mobile}`
    })
}

/**
 * 获取登录用户信息
 */
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'   // `Bearer + 用户 token (在容器里面)`
    // headers: {     
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}

/**
 * 获取用户频道列表
 */
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}

/**
 * 关注用户
 */
export const addFollow = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

/**
 * 取消关注用户
 */
export const deleteFollow = userId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`
  })
}

/**
 * user-profile 获取用户个人资料
 */
export const getUserProfile = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
  })
}

/**
 * 修改用户个人资料
 */
export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/profile',
    data
  })
}

/**
 * 修改用户照片资料
 */
export const updateUserPhoto = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    data
  })
}