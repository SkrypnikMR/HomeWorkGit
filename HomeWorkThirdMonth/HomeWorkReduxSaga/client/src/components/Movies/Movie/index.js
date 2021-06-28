import { connect } from 'react-redux';
import Movie from './Movie.jsx';
import { deleteMovie, updateMovie } from '../../../store/movies/actions';
import { getMovieById, getIsLoading } from '../../../store/movies/selectors';

const mapStateToProps = (state, props) => ({
    movie: getMovieById(state, props),
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = { deleteMovie, updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
