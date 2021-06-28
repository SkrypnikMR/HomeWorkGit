import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import * as sagas from '../saga';
import * as AT from '../actionTypes';
import * as actions from '../actions';
import { getMovieById } from '../selectors';

global.fetch = jest.fn();

describe('moviesSaga', () => {
    describe('allMoviesSagas', () => {
        let action;
        it('should call getMoviesSaga withoutError', () => {
            const data = { json: jest.fn() };
            const mockServerParsedAnswer = [{
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            }]
            action = { type: AT.GET_MOVIES };
            testSaga(sagas.getMoviesSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .call(fetch, 'http://localhost:5246/app/movies')
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.getMoviesSuccess(mockServerParsedAnswer))
                .next()
                .isDone();
        });
        it('should call getMoviesSaga with Error', () => {
            action = { type: AT.GET_MOVIES };
            testSaga(sagas.getMoviesSaga, action)
                .next()
                .throw()
                .put(actions.getMoviesError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call postMovieSaga withoutError, message = accept', () => {
            const data = { json: jest.fn() };
            const payload = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            };
            const stringifyPayload = JSON.stringify(payload);
            const mockServerParsedAnswer = {
                message: 'accept'
            }
            action = {
                type: AT.POST_MOVIE,
                payload
            };
            testSaga(sagas.postMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .call([JSON, JSON.stringify], action.payload)
                .next(stringifyPayload)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'POST',
                        body: stringifyPayload,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.postMovieSuccess())
                .next()
                .put(actions.getMovies())
                .next()
                .isDone();
        });
        it('should call postMovieSaga withoutError, message !== accept', () => {
            const data = { json: jest.fn() };
            const payload = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            };
            const stringifyPayload = JSON.stringify(payload);
            const mockServerParsedAnswer = {
                message: 'not accept'
            }
            action = {
                type: AT.POST_MOVIE,
                payload
            };
            testSaga(sagas.postMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .call([JSON, JSON.stringify], action.payload)
                .next(stringifyPayload)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'POST',
                        body: stringifyPayload,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.postMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call postMovieSaga with Error', () => {
            action = {
                type: AT.POST_MOVIE,
            };
            testSaga(sagas.postMovieSaga, action)
                .next()
                .throw()
                .put(actions.postMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call deleteMovieSaga withoutError, message = done', () => {
            const data = { json: jest.fn() };
            const payload = '2';
            const movie = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            }
            const stingifyMessage = JSON.stringify(movie);
            const mockServerParsedAnswer = {
                message: 'done'
            }
            action = {
                type: AT.DELETE_MOVIE,
                payload
            };
            testSaga(sagas.deleteMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .select(getMovieById, { id: action.payload })
                .next(movie)
                .call([JSON, JSON.stringify], movie)
                .next(stingifyMessage)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'DELETE',
                        body: stingifyMessage,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.deleteMovieSuccess({ id: movie.id }))
                .next()
                .isDone();
        });
        it('should call deleteMovieSaga withoutError, message !== done', () => {
            const data = { json: jest.fn() };
            const payload = '2';
            const movie = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            }
            const stingifyMessage = JSON.stringify(movie);
            const mockServerParsedAnswer = {
                message: '!== done'
            }
            action = {
                type: AT.DELETE_MOVIE,
                payload
            };
            testSaga(sagas.deleteMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .select(getMovieById, { id: action.payload })
                .next(movie)
                .call([JSON, JSON.stringify], movie)
                .next(stingifyMessage)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'DELETE',
                        body: stingifyMessage,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.deleteMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call deleteMovieSaga with Error', () => {
            action = {
                type: AT.DELETE_MOVIE,
            };
            testSaga(sagas.deleteMovieSaga, action)
                .next()
                .throw()
                .put(actions.deleteMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call updateMovieSaga withoutError, message = done', () => {
            const data = { json: jest.fn() };
            const payload = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            };
            const stringifyPayload = JSON.stringify(payload);
            const mockServerParsedAnswer = {
                message: 'done'
            }
            action = {
                type: AT.UPDATE_MOVIE,
                payload
            };
            testSaga(sagas.updateMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .call([JSON, JSON.stringify], action.payload)
                .next(stringifyPayload)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'PUT',
                        body: stringifyPayload,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.updateMovieSuccess(action.payload))
                .next()
                .isDone();
        });
        it('should call updateMovieSaga withoutError, message !== done', () => {
            const data = { json: jest.fn() };
            const payload = {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            };
            const stringifyPayload = JSON.stringify(payload);
            const mockServerParsedAnswer = {
                message: '!== done'
            }
            action = {
                type: AT.UPDATE_MOVIE,
                payload
            };
            testSaga(sagas.updateMovieSaga, action)
                .next()
                .put(actions.startMoviesRequest())
                .next()
                .call([JSON, JSON.stringify], action.payload)
                .next(stringifyPayload)
                .call(fetch,
                    'http://localhost:5246/app/movies',
                    {
                        method: 'PUT',
                        body: stringifyPayload,
                        headers: { 'Content-Type': 'application/json' }
                    }
                )
                .next(data)
                .call([data, data.json])
                .next(mockServerParsedAnswer)
                .put(actions.updateMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        it('should call updateMovieSaga with Error', () => {
            action = {
                type: AT.UPDATE_MOVIE,
            };
            testSaga(sagas.updateMovieSaga, action)
                .next()
                .throw()
                .put(actions.updateMovieError())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    'Server Error, try later...', 'SERVER ERROR', 2000)
                .next()
                .isDone();
        });
        describe('fork', () => {
            it('should fork watchers', () => {
                expectSaga(sagas.watcher)
                    .put({ type: 'FORKED' })
                    .run();
            });
        });
    });
});
