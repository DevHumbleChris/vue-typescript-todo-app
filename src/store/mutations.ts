import DefaultState from '@/types/DefaultState'
import Todo from '@/types/Todo'

export default {
  ADD_TODOS (state: DefaultState, payload: Todo): void {
    const newTodos = [...state.todos, payload]
    state.todos = newTodos
  }
}
