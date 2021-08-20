import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: '/todo',
  initialState: {
    todo: [],
    loading: false,
    request: {}
  },
  reducers: {
    //Get
    getTodosRequest: (state) => {
      state.loading = true
    },
    getTodosRequestSuccess: (state, {payload}) => {
      state.todo = payload.todo
      state.request = payload.request
      state.loading = false
    },
    getTodosRequestFailure: (state) => {
      state.loading = false
    },

    //Create
    createTodoRequest: (state) => {
      state.loading = true
    },
    createTodoRequestSuccess: (state, {payload}) => {
      state.todo.unshift(payload)
      state.loading = false
    },
    createTodoRequestFailure: (state) => {
      state.loading = false
    },
    deleteTodoRequest: (state) => {
      state.loading = true
    },
    deleteTodoRequestSuccess: (state, {payload}) => {
      state.loading = false
      state.todo = state.todo.filter(t => t.id !== payload ? t : false)
    },
    deleteTodoRequestFailure: (state) => {
      state.loading = false
    },
    updateTodoRequest: (state) => {
      state.loading = true
    },
    updateTodoRequestSuccess: (state, {payload}) => {
      state.todo = state.todo.map(t => t.id === payload.id ? payload : t)
      state.loading = false
    },
    updateTodoRequestFailure: (state) => {
      state.loading = false
    }
  }
})

export const {
  getTodosRequest,
  getTodosRequestSuccess,
  getTodosRequestFailure,
  createTodoRequest,
  createTodoRequestSuccess,
  createTodoRequestFailure,
  deleteTodoRequest,
  deleteTodoRequestSuccess,
  deleteTodoRequestFailure,
  updateTodoRequest,
  updateTodoRequestSuccess,
  updateTodoRequestFailure
} = todoSlice.actions

export const todosSelector = state => state.todo

export default todoSlice.reducer