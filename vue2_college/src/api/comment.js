/**
 * 文章评论相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取文章列表
 */
export const getComments = params => {
    return request({
      method: 'GET',
      url: '/app/v1_0/comments',
      params  // 传一个 params 对象进来
    })
}


