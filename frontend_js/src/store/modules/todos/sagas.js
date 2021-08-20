import { all, takeLatest, call, put } from 'redux-saga/effects'
import apiBase from '../../../services/api'

import { 
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
} from './reducer'

function* getTodos() {
  try {
    const response = yield call(apiBase.get, '/todo')

    yield put(getTodosRequestSuccess({todo: response.data}))
  } catch (error) {
    yield put(getTodosRequestFailure())
    console.log(error)
  }
}

function* createTodos({payload}) {
  try {
    const response = yield call(apiBase.post, '/todo', payload)

    yield put(createTodoRequestSuccess(response.data))
  } catch (error) {
    yield put(createTodoRequestFailure())
    console.log(error)
  }
}

function* deleteTodos({payload}) {
  const {id} = payload
  try {
    yield call(apiBase.delete, `/todo/${id}`)
    yield put(deleteTodoRequestSuccess(id))
  } catch (error) {
    yield put(deleteTodoRequestFailure())
    console.log(error)
  }
}

//Função para deletar todos selecionados ou somente um todo
// function* deleteTodos({payload}) {

//   let id

//   try {
//     if(payload.length > 1) {
//       id = payload.map(ids => ids.id)
//       yield call(apiBase.post, `/todo/destroy_all_selected`, {id: id})
//     } else {
//       id = payload?.[0]?.id
//       yield call(apiBase.delete, `/todo/${id}`)
//     }
//     yield put(deleteTodoRequestSuccess(id))
//   } catch (error) {
//     yield put(deleteTodoRequestFailure())
//     console.log(error)
//   }
// }

function* updateTodo({payload}) {
  const {id} = payload

  try {
    const response = yield call(apiBase.put, `/todo/${id}`, payload)
    yield put(updateTodoRequestSuccess(response.data))
  } catch (error) {
    yield put(updateTodoRequestFailure())
    console.log(error)
  }
}

export default all([
  takeLatest(getTodosRequest().type, getTodos),
  takeLatest(createTodoRequest().type, createTodos),
  takeLatest(deleteTodoRequest().type, deleteTodos),
  takeLatest(updateTodoRequest().type, updateTodo)
])