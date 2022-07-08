import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
  );

  sagaMiddleware.run(watcherSaga);
  return store;
};
