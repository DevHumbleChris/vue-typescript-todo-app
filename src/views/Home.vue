<template>
  <div class="home">
    <div class="flexWrapper">
      <img alt="Vue logo" src="../assets/logo.png" class="img_logo">
      <h4>Todo App (Vue 3 + Vuex + TypeScript)</h4>
    </div>
    <div v-if="modalMessage" class="modal flexWrapper">
      {{ modalMessage }}
    </div>
    <form method="POST" @submit.prevent="handleSubmit" class="flexWrapper formContainer">
      <input v-model="singleTodo.todoName" type="text" placeholder="e.g watch movies" required>
      <button type="submit" class="btn btnAdd">+ ADD</button>
    </form>
    <div class="infoWrapper">
      <h4 class="infoText">Total Todos {{ totalTodos }}</h4>
      <select v-model="orderTerm" id="country" name="country" class="orderItem">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
    <HelloWorld :orderTerm="orderTerm" />
    <p class="flexWrapper author">Made By AmChrisKE</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Todo from '@/types/Todo'
import OrderTerm from '@/types/OrderTerm'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()

    const singleTodo = ref<Todo>({
      id: Date.now(),
      todoName: '',
      isCompleted: false,
      dateCreated: new Date().toLocaleString()
    })

    const orderTerm = ref<OrderTerm>('all')

    const totalTodos = computed(() => {
      return store.getters.totalTodos
    })

    const todos = computed(() => {
      return store.state.todos
    })

    const handleSubmit = () => {
      store.commit('ADD_TODOS', singleTodo.value)
      singleTodo.value = {
        id: Date.now(),
        todoName: '',
        isCompleted: false,
        dateCreated: new Date().toLocaleString()
      }
    }

    const modalMessage = computed(() => {
      return store.state.modalMessage
    })

    return {
      todos,
      singleTodo,
      handleSubmit,
      totalTodos,
      orderTerm,
      modalMessage
    }
  }
})
</script>

<style>
.home {
  margin-top: 2rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
}
.flexWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_logo {
  width: 3rem;
}
.formContainer {
  margin: auto;
  max-width: 28rem;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.orderItem {
  width: 45%;
}

.btn {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btnAdd {
  margin-left: 0.8rem;
}
.btnClear {
  margin-top: 0.4rem;
}

.btn:hover {
  background-color: #45a049;
}

.infoWrapper {
  margin: auto;
  max-width: 26rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.infoText {
  font-weight: 400;
}

.modal {
  margin: auto;
  max-width: 22rem;
  padding: 12px;
  border-radius: 5px;
  background: rgb(46, 224, 141);
  color: #fff;
}
.autho {
  margin-top: 0.4rem;
}
</style>
