import DefaultState from '@/types/DefaultState'

export default {
  totalTodos (state: DefaultState): number {
    return state.todos.length
  }
}
