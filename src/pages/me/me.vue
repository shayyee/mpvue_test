<template>
    <div class="container">
        <div class="userinfo">
            <img class="userinfo-avatar" style="width: 200rpx;height: 200rpx;" :src="userinfo.avatarUrl" alt="">
            <p class="userinfo-nickname">{{userinfo.nickName}}</p>
        </div>
        <year-progress></year-progress>
        <button v-if='userinfo.openId' @click="scanBook" class="btn">添加图书</button>
        <button v-else open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="doLogin">点击登录</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {showSuccess,showModal,showLoading,hideLoading} from '../../utils/index'
  import {post} from '../../utils/api'
  import qcloud from 'wafer2-client-sdk'
  import config from '../../utils/config'
  import YearProgress from '../../components/yearProgress.vue'
  export default {
    components: {
      YearProgress
    },
    data() {
      return {
        userinfo: null
      }
    },
    created () {
      this.userinfo = wx.getStorageSync('userinfo')
        ? wx.getStorageSync('userinfo')
        : {
          avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
          nickName: ''
        };
    },
    methods: {
      async addBook (isbn) {
        const res = await post('/addbook', {
          isbn,
          openid: this.userinfo.openId
        })
        console.log(res)
        showModal('添加成功',`${res.data.title}添加成功`)
      },
      doLogin (e) {
        let _this = this;
        // 查看是否授权
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userInfo']) {
              showLoading('正在登录...');
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              qcloud.setLoginUrl(config.loginUrl)
              qcloud.login({
                success: function (userinfo) {
                  _this.userinfo = userinfo;
                  hideLoading()
                  showSuccess('登录成功')
                  wx.setStorageSync('userinfo', userinfo)
                },
                fail: function (err) {
//                  console.log('登录失败', err);
                }
              });
            }
          }
        })
      },
      scanBook () {
        wx.scanCode({
          success: (res) => {
            if (res.result) {
              this.addBook(res.result)
            }
          }
        })
      }
    }
  }
</script>
<style lang="scss">
    .container {
        padding: 0 30 rpx;
        .userinfo {
            margin-top: 100 rpx;
            text-align: center;
            .userinfo-avatar {
                margin: 20 rpx;
                border-radius: 50%;
            }
        }
        .btn {
            margin-top: 100rpx;
        }
    }
</style>