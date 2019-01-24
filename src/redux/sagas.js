import {takeLatest, put, call, all} from 'redux-saga/effects';
import { fetchUsersFromApi, updateUsersFromApi } from '../services/users';

function* fetchUsers() {
    yield put({ type: 'FETCH_POSTS_PENDING' })

    try{
        const usersFromApi = yield call(fetchUsersFromApi)
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: usersFromApi })
    }catch(error) {
        yield put({ type: 'FETCH_POSTS_FAILURE' });
    }
}

function* updateUsers(action) {
    yield put({ type: 'UPDATE_POST_PENDING' })
  
    try {
      const updatedPost = yield call(updateUsersFromApi, action.payload)
      yield put({ type: 'UPDATE_POST_SUCCESS', payload: updatedPost })
    } catch (error) {
      yield put({ type: 'UPDATE_POST_FAILURE' })
    }
  }

function* watchUpdateUsers() {
    yield takeLatest('UPDATE_POST', updateUsers)
}

function* watchFetchUsers() {
    yield takeLatest('FETCH_POSTS', fetchUsers)
}

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchUpdateUsers(),
    ])
}