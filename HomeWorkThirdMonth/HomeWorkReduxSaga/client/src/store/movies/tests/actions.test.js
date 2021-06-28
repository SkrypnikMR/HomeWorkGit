import * as actions from '../actions';
import * as AT from '../actionTypes';

describe('store actions', () => {
    describe('startMoviesRequest', () => {
        it('should be defined', () => {
            expect(actions.startMoviesRequest).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.startMoviesRequest).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.startMoviesRequest(payload))
                .toEqual({
                    type: AT.START_MOVIES_REQUEST,
                    payload
                })
        })
    })
    describe('getMovies', () => {
        it('should be defined', () => {
            expect(actions.getMovies).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.getMovies).toBe('function');
        })
        it('should be return needed object', () => {
            expect(actions.getMovies())
                .toEqual({ type: AT.GET_MOVIES })
        })
    })
    describe('getMoviesSuccess', () => {
        it('should be defined', () => {
            expect(actions.getMoviesSuccess).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.getMoviesSuccess).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.getMoviesSuccess(payload))
                .toEqual({
                    type: AT.GET_MOVIES_SUCCESS,
                    payload
                })
        })
    })
    describe('getMoviesError', () => {
        it('should be defined', () => {
            expect(actions.getMoviesError).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.getMoviesError).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.getMoviesError(payload))
                .toEqual({
                    type: AT.GET_MOVIES_ERROR,
                    payload
                })
        })
    })
    describe('postMovies', () => {
        it('should be defined', () => {
            expect(actions.postMovies).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.postMovies).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.postMovies(payload))
                .toEqual({
                    type: AT.POST_MOVIE,
                    payload
                })
        })
    })
    describe('postMovieSuccess', () => {
        it('should be defined', () => {
            expect(actions.postMovieSuccess).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.postMovieSuccess).toBe('function');
        })
        it('should be return needed object', () => {
            expect(actions.postMovieSuccess())
                .toEqual({ type: AT.POST_MOVIE_SUCCESS })
        })
    })
    describe('postMovieError', () => {
        it('should be defined', () => {
            expect(actions.postMovieError).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.postMovieError).toBe('function');
        })
        it('should be return needed object', () => {
            expect(actions.postMovieError())
                .toEqual({ type: AT.POST_MOVIE_ERROR })
        })
    })
    describe('deleteMovie', () => {
        it('should be defined', () => {
            expect(actions.deleteMovie).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.deleteMovie).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.deleteMovie(payload))
                .toEqual({
                    type: AT.DELETE_MOVIE,
                    payload
                })
        })
    })
    describe('deleteMovieSuccess', () => {
        it('should be defined', () => {
            expect(actions.deleteMovieSuccess).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.deleteMovieSuccess).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.deleteMovieSuccess(payload))
                .toEqual({
                    type: AT.DELETE_MOVIE_SUCCESS,
                    payload
                })
        })
    })
    describe('deleteMovieError', () => {
        it('should be defined', () => {
            expect(actions.deleteMovieError).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.deleteMovieError).toBe('function');
        })
        it('should be return needed object', () => {
            expect(actions.deleteMovieError())
                .toEqual({
                    type: AT.DELETE_MOVIE_ERROR,
                })
        })
    })
    describe('updateMovie', () => {
        it('should be defined', () => {
            expect(actions.updateMovie).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.updateMovie).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.updateMovie(payload))
                .toEqual({
                    type: AT.UPDATE_MOVIE,
                    payload
                })
        })
    })
    describe('updateMovieSuccess', () => {
        it('should be defined', () => {
            expect(actions.updateMovieSuccess).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.updateMovieSuccess).toBe('function');
        })
        it('should be return needed object', () => {
            const payload = 'data';
            expect(actions.updateMovieSuccess(payload))
                .toEqual({
                    type: AT.UPDATE_MOVIE_SUCCESS,
                    payload
                })
        })
    })
    describe('updateMovieError', () => {
        it('should be defined', () => {
            expect(actions.updateMovieError).toBeDefined();
        })
        it('should be function', () => {
            expect(typeof actions.updateMovieError).toBe('function');
        })
        it('should be return needed object', () => {
            expect(actions.updateMovieError())
                .toEqual({
                    type: AT.UPDATE_MOVIE_ERROR,
                })
        })
    })

})