/**
 * Created by lenovo on 2018/8/14.
 */
import config from './config'
import {showModal} from "./index";

export function get(url, data) {
  return request(url, data)
}

export function post(url, data) {
  return request(url, data, 'POST')
}


function request(url, data = null, method = 'GET') {
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      method,
      data,
      success: function(res) {
        if(res.data.code === config.ERR_OK) {
          resolve(res.data)
        } else {
          showModal('操作失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}
