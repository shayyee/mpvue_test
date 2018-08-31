<template>
    <div>
        <card :key="book.id" v-for="book in books" :book="book"></card>
        <p v-if="!more" class="text-footer">没有更多数据</p>
    </div>
</template>

<script type="text/ecmascript-6">
  import {get} from "../../utils/api";
  import Card from '../../components/card.vue'
  import config from '../../utils/config'
  export default {
    components: {
      Card
    },
    data() {
      return {
        books: [],
        page: 0,
        more: true,
        tops: []
      }
    },
    mounted() {
      this.getList(true)
      this.getTop()
    },
    onPullDownRefresh() {
      this.getList(true)
      this.getTop()
    },
    onReachBottom() {
      if(!this.more) {
        return false
      }
      this.page = this.page + 1
      this.getList()
    },
    methods: {
      async getList(init) {
        if(init) {
          this.page = 0
          this.more = true
        }
        wx.showNavigationBarLoading()
        const books = await get('/booklist',{page:this.page})
        if(init) {
          // 初始加载
          this.books = books.data.list
          wx.stopPullDownRefresh()
        } else {
          // 下拉刷新不能直接覆盖books，而是累加
          this.books = this.books.concat(books.data.list)
        }
        if(this.books.length > config.pageSize || (this.books.length <= config.pageSize && this.page == 0)) {
          this.more = false
        }
        wx.hideNavigationBarLoading()
      },
      async getTop() {
        const tops = await get('/top')
        this.tops = tops.list
      }
    }
  }
</script>