<template>
    <div>{{bookid}}</div>
</template>

<script type="text/ecmascript-6">
    import {get} from '../../utils/api'
  export default {
    data() {
      return {
        bookid: ''
      }
    },
    mounted() {
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
    },
    methods: {
      async getDetail() {
        const info = await get('/bookdetail', {id:this.bookid})
      }
    }
  }
</script>