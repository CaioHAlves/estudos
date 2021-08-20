import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import createReducer from './modules/rootReducer'
import sagas from './modules/rootSaga'

const configureAdminStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    preloadedState: initialState,
  });

  sagaMiddleware.run(sagas);

  return store;
}

export default configureAdminStore