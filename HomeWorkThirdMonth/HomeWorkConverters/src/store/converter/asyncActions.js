import * as actions from './actions';

export const getMovies = () => async (dispatch) => {
    try {
        dispatch(actions.getMoviesRequest());
        const data = await fetch('http://localhost:5246/app/movies');
        dispatch(actions.getMoviesSuccess(await data.json()));
    } catch (e) { actions.getMoviesError(e); }
};
