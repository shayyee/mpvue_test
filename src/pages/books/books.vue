<template>
    <div>
        <card :key="book.id" v-for="book in books" :book="book"></card>
    </div>
</template>

<script type="text/ecmascript-6">
  import {get} from "../../utils/api";
  import Card from '../../components/card.vue'
  export default {
    components: {
      Card
    },
    data() {
      return {
        books: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const books = await get('/booklist')
        this.books = books.data.list
      }
    }
  }
</script>