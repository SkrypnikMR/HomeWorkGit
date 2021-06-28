import * as actions from './actions';

export const getMovies = () => async (dispatch) => {
    try {
        dispatch(actions.getMoviesRequest());
        const data = await fetch('http://localhost:5246/app/movies');
        dispatch(actions.getMoviesSuccess(await data.json()));
    } catch (e) { actions.getMoviesError(e); }
};
export const postMovies = (newMovie) => async (dispatch) => {
    const body = JSON.stringify(newMovie);
    const responce = await fetch('http://localhost:5246/app/movies', { method: 'POST', body, headers: { 'Content-Type': 'application/json' } });
    const serverAnswer = await responce.json();
    if (serverAnswer.message === 'accept') {
        dispatch(actions.getMoviesRequest());
        const data = await fetch('http://localhost:5246/app/movies');
        dispatch(actions.getMoviesSuccess(await data.json()));
    }
};

export const deleteItem = (id) => async (dispatch, getState) => {
    const movie = getState().movies.movies.find((movie) => movie.id === id);
    const body = JSON.stringify({ id: movie.id });
    const responce = await fetch('http://localhost:5246/app/movies', { method: 'DELETE', body, headers: { 'Content-Type': 'application/json' } });
    const serverAnswer = await responce.json();
    if (serverAnswer.message === 'done') dispatch(actions.deleteMovieSuccess({ id }));
};

export const updateItem = (changedData) => async (dispatch) => {
    const body = JSON.stringify(changedData);
    const responce = await fetch('http://localhost:5246/app/movies', { method: 'PUT', body, headers: { 'Content-Type': 'application/json' } });
    const serverAnswer = await responce.json();
    if (serverAnswer.message === 'done') {
        dispatch(actions.getMoviesRequest());
        const data = await fetch('http://localhost:5246/app/movies');
        dispatch(actions.getMoviesSuccess(await data.json()));
    }
};
