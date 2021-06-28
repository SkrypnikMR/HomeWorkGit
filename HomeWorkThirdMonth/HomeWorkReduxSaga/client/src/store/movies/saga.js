import { takeEvery, call, put, select } from "@redux-saga/core/effects";
import * as actionTypes from './actionTypes';
import { NotificationManager } from 'react-notifications';
import {
    startMoviesRequest,
    getMoviesSuccess,
    getMoviesError,
    getMovies,
    postMovieSuccess,
    postMovieError,
    deleteMovieSuccess,
    deleteMovieError,
    updateMovieSuccess,
    updateMovieError,
} from './actions';
import { getMovieById } from './selectors';

export function* getMoviesSaga() {
    try {
        yield put(startMoviesRequest())
        const data = yield call(fetch, 'http://localhost:5246/app/movies');
        const parsedData = yield call([data, data.json]);
        yield put(getMoviesSuccess(parsedData));
    } catch (e) {
        yield put(getMoviesError());
        yield call([NotificationManager, NotificationManager.error], 'Server Error, try later...', 'SERVER ERROR', 2000);
    }
}
export function* postMovieSaga({ payload }) {
    try {
        yield put(startMoviesRequest());
        const body = yield call([JSON, JSON.stringify], payload)
        const serverAnswer = yield call(fetch, 'http://localhost:5246/app/movies', { method: 'POST', body, headers: { 'Content-Type': 'application/json' } })
        const parsedAnswer = yield call([serverAnswer, serverAnswer.json]);
        if (parsedAnswer.message === 'accept') {
            yield put(postMovieSuccess());
            yield put(getMovies());
        }
        else {
            yield put(postMovieError());
            yield call([NotificationManager, NotificationManager.error], 'Server Error, try later...', 'SERVER ERROR', 2000);
        }
    }
    catch (e) {
        yield put(postMovieError());
        yield call([NotificationManager, NotificationManager.error], 'Server Error, try later...', 'SERVER ERROR', 2000);
    }
}
export function* deleteMovieSaga({ payload }) {
    try {
        yield put(startMoviesRequest());
        const movie = yield select(getMovieById, { id: payload });
        const body = yield call([JSON, JSON.stringify], movie);
        const serverAnswer = yield call(fetch,
            'http://localhost:5246/app/movies',
            { method: 'DELETE', body, headers: { 'Content-Type': 'application/json' } });
        const parsedServerAnswer = yield call([serverAnswer, serverAnswer.json]);
        if (parsedServerAnswer.message === 'done') {
            yield put(deleteMovieSuccess({ id: movie.id }));
        }
        else {
            yield put(deleteMovieError());
            yield call([NotificationManager, NotificationManager.error],
                'Server Error, try later...', 'SERVER ERROR', 2000);
        }
    }
    catch (e) {
        yield put(deleteMovieError());
        yield call([NotificationManager, NotificationManager.error],
            'Server Error, try later...', 'SERVER ERROR', 2000);
    }
}
export function* updateMovieSaga({ payload }) {
    try {
        yield put(startMoviesRequest());
        const body = yield call([JSON, JSON.stringify], payload);
        const serverAnswer = yield call(fetch, 'http://localhost:5246/app/movies',
            { method: 'PUT', body, headers: { 'Content-Type': 'application/json' } })
        const parsedServerAnswer = yield call([serverAnswer, serverAnswer.json]);
        if (parsedServerAnswer.message === 'done') {
            yield put(updateMovieSuccess(payload));

        }
        else {
            yield put((updateMovieError()));
            yield call([NotificationManager, NotificationManager.error],
                'Server Error, try later...', 'SERVER ERROR', 2000);
        }
    }
    catch (e) {
        yield put(updateMovieError());
        yield call([NotificationManager, NotificationManager.error],
            'Server Error, try later...', 'SERVER ERROR', 2000);
    }
}
export function* watcher() {
    yield takeEvery(actionTypes.GET_MOVIES, getMoviesSaga);
    yield takeEvery(actionTypes.POST_MOVIE, postMovieSaga);
    yield takeEvery(actionTypes.DELETE_MOVIE, deleteMovieSaga);
    yield takeEvery(actionTypes.UPDATE_MOVIE, updateMovieSaga);
}