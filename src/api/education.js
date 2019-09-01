import axios from '@/libs/api.request'

/**
 * 获取学历信息
 * @param params
 * @returns {*|void|http.ClientRequest|ClientHttp2Stream|AxiosPromise<any>}
 */
export const getEducation = (params) => {
  return axios.request({
    url: 'Education/getIndo',
    method: 'get',
    params: params
  })
}

/**
 * 获取学历列表
 * @param params
 * @returns {*|void|http.ClientRequest|ClientHttp2Stream|AxiosPromise<any>}
 */
export const getEducationIndex = (params) => {
  return axios.request({
    url: 'Education/index',
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
    url: 'Education/add',
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
    url: 'Education/edit',
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
    url: 'Education/del',
    method: 'get',
    params: {
      id: id
    }
  })
}
