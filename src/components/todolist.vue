<template>
    <div>
        <p>{{title}}</p>
        <div>
            <input type="text" v-model="mytodo">
            <button @click="handleClick">添加</button>
            <button @click="clean">清空已完成</button>
        </div>
        <ul>
            <li :key="index" :class="{'done': todo.done}" @click="toggle(index)" v-for="(todo,index) in todos">{{index+1}}: {{todo.text}}</li>
        </ul>
        <p>
            {{remains}}/{{todos.length}}
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        title: 'hello vuejs',
        todos: [{
          text: '睡觉',
          done: false
        }, {
          text: '写作',
          done: false
        }, {
          text: '编程',
          done: false
        }],
        mytodo: ''
      }
    },
    computed: {
      remains () {
        return this.todos.filter((cur, index, arr) => {
          return !cur.done
        }).length
      }
    },
    methods: {
      handleClick () {
        this.todos.push({text: this.mytodo, done: false})
        this.mytodo = ''
      },
      toggle (index) {
        this.todos[index].done = !this.todos[index].done
      },
      clean () {
        this.todos = this.todos.filter((cur, index, arr) => {
          return !cur.done
        })
      }
    }
  }
</script>

<style scoped>
    li.done {
        text-decoration: line-through;
        color: red;
    }
</style>
