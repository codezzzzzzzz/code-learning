// const element = <h1 id='app'>Hello world</h1>

// const element = createVnode('h1', {id: 'app'}, 'Hello world')

// @vitejs/plugin-vue-jsx

import { defineComponent, ref } from 'vue'

export const todolist =  defineComponent({
  setup(props) {
    let title = ref('')
    let todos = ref([
      { title: '吃饭', done: true },
      { title: '学习', done: false },
    ])

    function addTodo() {
      todos.value.push({ title: title.value, done: false })
      title.value = ''
    }

    return () => (
      <div>
        <input type="text" vModel={title.value} />
        <button onClick={addTodo}>确定</button>
        <ul>
          {
            todos.value.map(todo => {
              return <li>{todo.title}</li>
            })
          }
        </ul>
      </div>
    )

  }
})

export const obutton = defineComponent({
  setup(props) {
    return () => (
      <button>按钮xxxxxxx</button>
    )
  }
})

