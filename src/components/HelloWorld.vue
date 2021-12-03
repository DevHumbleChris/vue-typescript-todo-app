<template>
  <div class="todos">
    <transition-group v-if="orderedTodos" name="list" tag="ul">
      <li v-for="todo in orderedTodos" :key="todo.id" class="itemTodo">
        <div class="flexTodo">
          <input v-model="todo.isCompleted" type="checkbox" :id="todo.todoName" :name="todo.todoName">
          <label class="todoItem" :for="todo.todoName" :name="todo.todoName" :class="{ 'completed': todo.isCompleted }">
            {{ todo.todoName }}
          </label>
        </div>
        <button class="btnRemove" @click="removeTodo(todo.id)">
          - Remove
        </button>
      </li>
    </transition-group>
    <button v-if="orderedTodos.length > 0" class="btn btnClear" @click="clearAll">Clear All</button>
    <div v-else class="itemTodo">
      No todos Created
    </div>
  </div>
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

    const clearAll = () => {
      store.commit('CLEAR_ALL_TODOS')
    }

    const removeTodo = (id: number) => {
      store.commit('REMOVE_TODO', id)
    }

    return {
      orderedTodos,
      clearAll,
      removeTodo
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
  margin: auto;
  background: #fff;
  padding: 12px;
  border-radius: 5px;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
}
.flexTodo {
  display: flex;
  align-items: center;
}
.btnRemove {
  margin: auto;
  border: none;
  color: #ff0000;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
}
.list-move {
  transition: all 1s;
}
</style>
