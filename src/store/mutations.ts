import DefaultState from '@/types/DefaultState'
import Todo from '@/types/Todo'

export default {
  ADD_TODOS (state: DefaultState, payload: Todo): void {
    const newTodos = [...state.todos, payload]
    state.todos = newTodos
    state.modalMessage = 'New Todo Added'

    setTimeout(() => {
      state.modalMessage = ''
    }, 3000)
  },
  CLEAR_ALL_TODOS (state: DefaultState): void {
    state.modalMessage = 'Clearing All Todos'
    setTimeout(() => {
      state.todos = []
      state.modalMessage = ''
    }, 3000)
  },
  REMOVE_TODO (state: DefaultState, payload: number): void {
    const newTodos = state.todos.filter((todo: Todo) => todo.id !== payload)
    state.todos = newTodos
    state.modalMessage = 'Todo Deleted Successfully'

    setTimeout(() => {
      state.modalMessage = ''
    }, 3000)
  }
}
