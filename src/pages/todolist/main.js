/**
 * Created by lenovo on 2018/8/8.
 */

import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: "todolist"
  }
}