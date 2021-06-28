import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga.sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Array<any> = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
