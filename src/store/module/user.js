import {
  login,
  logout,
  getUserInfo
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userInfo: {},
    token: getToken(),
    access: []
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { username, password }) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({ username, password }).then(res => {
          commit('setUserInfo', res.data.data)
          commit('setToken', res.data.data.apiAuth)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setToken', '')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state }) {
      if (state.userInfo) {
        return state.userInfo
      } else {
        return new Promise((resolve, reject) => {
          try {
            getUserInfo(state.token).then(res => {
              commit('setUserInfo', res.data.data)
              resolve(res.data.data)
            }).catch(err => {
              reject(err)
            })
          } catch (error) {
            reject(error)
          }
        })
      }
    }
  }
}
