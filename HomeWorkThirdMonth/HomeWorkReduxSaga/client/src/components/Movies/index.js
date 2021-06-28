import { connect } from 'react-redux';
import Movies from './Movies.jsx';
import { getMovies } from '../../store/movies/asyncActions.js';
import { getMoviesStoreList, getIsLoading } from '../../store/movies/selectors';

const mapStateToProps = (state) => ({
    movies: getMoviesStoreList(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
