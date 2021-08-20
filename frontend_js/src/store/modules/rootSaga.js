import { all } from 'redux-saga/effects'

import todo from './todos/sagas'

export default function* rootSaga() {
  yield all([todo])
}