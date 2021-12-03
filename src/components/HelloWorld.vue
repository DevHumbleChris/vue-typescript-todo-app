<template>
  <ul class="todos">
    <li v-for="todo in orderedTodos" :key="todo.id" class="itemTodo">
      <label class="todoItem" :for="todo.todoName" :name="todo.todoName" :class="{ 'completed': todo.isCompleted }">
        {{ todo.todoName }}
      </label>
      <input v-model="todo.isCompleted" type="checkbox" :id="todo.todoName" :name="todo.todoName">
    </li>
  <button class="btn btnClear">Clear All</button>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Todo from '@/types/Todo'
import { useStore } from 'vuex'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    orderTerm: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup (props) {
    const store = useStore()

    const orderedTodos = computed(() => {
      let orderedTodos: Todo[] = []
      if (props.orderTerm === 'completed') {
        orderedTodos = store.state.todos.filter((item: Todo) => item.isCompleted === true)
      }
      if (props.orderTerm === 'incompleted') {
        orderedTodos = store.state.todos.filter((item: Todo) => item.isCompleted === false)
      }
      if (props.orderTerm === 'all') {
        orderedTodos = store.state.todos
      }

      return orderedTodos
    })

    return {
      orderedTodos
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos {
  margin: auto;
  max-width: 25rem;
}
.todoItem {
  font-weight: 400;
  margin-left: 0.4rem;
}
.completed {
  text-decoration: line-through;
}
.itemTodo {
  background: #fff;
  padding: 12px;
  border-radius: 5px;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
