// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers/rootReducer';
// import rootSaga from './store/index'

// const configureStore = () => {
//    const sagaMiddleware = createSagaMiddleware();
//    return {
//        ...createStore(
//            rootReducer,
//            applyMiddleware(sagaMiddleware)),
//            runSaga: sagaMiddleware.run(rootSaga)
//    } 
// }
// export default configureStore;

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/rootReducer';
import rootSaga from './store/index'

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
      return applyMiddleware(sagaMiddleware, logger);
  };

  const store = createStore(
    reducer,
    initialState,
    getMiddleware(),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}