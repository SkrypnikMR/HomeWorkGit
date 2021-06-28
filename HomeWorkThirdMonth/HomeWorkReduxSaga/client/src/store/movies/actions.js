import * as AT from './actionTypes';

export const startMoviesRequest = (payload) => ({ type: AT.START_MOVIES_REQUEST, payload });

export const getMovies = () => ({ type: AT.GET_MOVIES })
export const getMoviesSuccess = (payload) => ({ type: AT.GET_MOVIES_SUCCESS, payload });
export const getMoviesError = (payload) => ({ type: AT.GET_MOVIES_ERROR, payload });

export const postMovies = (payload) => ({ type: AT.POST_MOVIE, payload });
export const postMovieSuccess = () => ({ type: AT.POST_MOVIE_SUCCESS });
export const postMovieError = () => ({ type: AT.POST_MOVIE_ERROR });

export const deleteMovie = (payload) => ({ type: AT.DELETE_MOVIE, payload });
export const deleteMovieSuccess = (payload) => ({ type: AT.DELETE_MOVIE_SUCCESS, payload });
export const deleteMovieError = () => ({ type: AT.DELETE_MOVIE_ERROR });

export const updateMovie = (payload) => ({ type: AT.UPDATE_MOVIE, payload });
export const updateMovieSuccess = (payload) => ({ type: AT.UPDATE_MOVIE_SUCCESS, payload });
export const updateMovieError = () => ({ type: AT.UPDATE_MOVIE_ERROR });
