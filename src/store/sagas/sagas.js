import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { API_CALL_REQUEST } from "../actions/loginActions";

function fetchHttp(request) {
  return function () {
    return axios(request);
  };
}

export function* workerSaga(action) {
  try {
    const res = yield call(fetchHttp(action.payload.request));
    const { token } = res.data;
    yield put({
      type: action.payload.okAction,
      payload: {
        token,
      },
    });
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: {
        error,
      },
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
