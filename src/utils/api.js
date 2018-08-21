/**
 * Created by lenovo on 2018/8/14.
 */
import config from './config'

export function request(url, data = null, method = 'GET') {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      method: method,
      data,
      success: function(res) {
        if(res.data.code === config.ERR_OK) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
