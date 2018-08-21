<script>
import {request} from './utils/api'
import qcloud from 'wafer2-client-sdk'
import config from './utils/config'
import {showSuccess} from './utils'
export default {
  created () {
    this.doLogin();
    // 调用API从本地缓存中获取数据
//    const logs = wx.getStorageSync('logs') || []
//    logs.unshift(Date.now())
//    wx.setStorageSync('logs', logs)
//
//    console.log('app created and cache logs by setStorageSync')
  },
  methods: {
    doLogin() {
      let user = wx.getStorageSync('userinfo');
      if(!user) {
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
          success: function (userInfo) {
            console.log('登录成功', userInfo);
            showSuccess('登录成功');
            wx.setStorageSync('userinfo',userInfo);
          },
          fail: function (err) {
            console.log('登录失败', err);
          }
        })
      }
    }
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
