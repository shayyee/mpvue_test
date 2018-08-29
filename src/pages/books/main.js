import Vue from 'vue'
import Books from './books.vue'

const app = new Vue(Books)
app.$mount()


export default {
  config: {
    enablePullDownRefresh: true
  }
}