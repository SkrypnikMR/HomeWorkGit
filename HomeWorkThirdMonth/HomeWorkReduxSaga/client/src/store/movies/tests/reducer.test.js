import { reducer, initialState } from '../reducer';
import * as AT from '../actionTypes';

describe('movies reducer', () => {
    it('should be defined', () => {
        expect(reducer).toBeDefined();
    });
    it('should be function', () => {
        expect(typeof reducer).toBe('function');
    });
    it('should return default', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });
    it('START_MOVIES_REQUEST', () => {
        const action = { type: AT.START_MOVIES_REQUEST };
        expect(reducer(undefined, action)).toEqual({ ...initialState, isLoading: true });
    });
    it('GET_MOVIES_SUCCESS', () => {
        const action = {
            type: AT.GET_MOVIES_SUCCESS,
            payload: [{ id: 1, cover: 'cover', title: 'title', description: 'desc' }]
        };
        expect(reducer(undefined, action))
            .toEqual({ ...initialState, movies: action.payload, isLoading: false });
    });
    it('GET_MOVIES_ERROR', () => {
        const action = {
            type: AT.GET_MOVIES_ERROR,
        };
        expect(reducer(undefined, action))
            .toEqual({ ...initialState, isLoading: false });
    });
    it('POST_MOVIE_SUCCESS', () => {
        const action = {
            type: AT.POST_MOVIE_SUCCESS,
        };
        expect(reducer(undefined, action))
            .toEqual({ ...initialState, isLoading: false });
    });
    it('POST_MOVIE_ERROR', () => {
        const action = {
            type: AT.POST_MOVIE_ERROR,
        };
        expect(reducer(undefined, action))
            .toEqual({ ...initialState, isLoading: false });
    });
    it('DELETE_MOVIE_ERROR', () => {
        const action = {
            type: AT.DELETE_MOVIE_ERROR,
        };
        expect(reducer(undefined, action))
            .toEqual({ ...initialState, isLoading: false });
    });
    it('DELETE_MOVIE_SUCCESS', () => {
        const mockStore = { ...initialState };
        mockStore.movies = [
            {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            }
        ];
        const action = {
            type: AT.DELETE_MOVIE_SUCCESS,
            payload: { id: 1 }
        };
        expect(reducer(mockStore, action))
            .toEqual({ ...mockStore, movies: [] });
    });
    it('UPDATE_MOVIE_SUCCESS', () => {
        const mockStore = { ...initialState };
        mockStore.movies = [
            {
                id: 1,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            },
            {
                id: 2,
                cover: 'cover',
                title: 'title',
                description: 'desc'
            }
        ];
        const action = {
            type: AT.UPDATE_MOVIE_SUCCESS,
            payload: { id: 1, changeParam: 'cover', newData: 'newCover' }
        };
        expect(reducer(mockStore, action))
            .toEqual({
                ...mockStore, movies: [{
                    id: 1, cover: 'newCover',
                    title: 'title',
                    description: 'desc'
                },
                {
                    id: 2,
                    cover: 'cover',
                    title: 'title',
                    description: 'desc'
                }]
            });
    });
    it('UPDATE_MOVIE_ERROR', () => {
        const action = {
            type: AT.UPDATE_MOVIE_ERROR,
        };
        expect(reducer(initialState, action))
            .toEqual({
                ...initialState, isLoading: false
            });
    });
})