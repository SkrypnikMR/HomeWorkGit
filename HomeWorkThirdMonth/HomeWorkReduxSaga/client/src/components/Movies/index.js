import { connect } from 'react-redux';
import Movies from './Movies.jsx';
import { getMovies } from '../../store/movies/actions';
import { getMoviesList, getIsLoading } from '../../store/movies/selectors';

const mapStateToProps = (state) => ({
    movies: getMoviesList(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
