import axios from '@/libs/api.request'

/**
 * 获取学历信息
 * @param params
 * @returns {*|void|http.ClientRequest|ClientHttp2Stream|AxiosPromise<any>}
 */
export const getJobTitle = (params) => {
  return axios.request({
    url: 'JobTitle/getIndo',
    method: 'get',
    params: params
  })
}

/**
 * 获取学历列表
 * @param params
 * @returns {*|void|http.ClientRequest|ClientHttp2Stream|AxiosPromise<any>}
 */
export const getJobTitleIndex = (params) => {
  return axios.request({
    url: 'JobTitle/index',
    method: 'get',
    params: params
  })
}

/**
 * 新增学历
 * @param data
 * @returns {wx.RequestTask | never}
 */
export const add = (data) => {
  return axios.request({
    url: 'JobTitle/add',
    method: 'post',
    data
  })
}

/**
 * 编辑学历
 * @param data
 */
export const edit = (data) => {
  return axios.request({
    url: 'JobTitle/edit',
    method: 'post',
    data
  })
}

/**
 * 删除学历
 * @param id
 */
export const del = (id) => {
  return axios.request({
    url: 'JobTitle/del',
    method: 'get',
    params: {
      id: id
    }
  })
}
