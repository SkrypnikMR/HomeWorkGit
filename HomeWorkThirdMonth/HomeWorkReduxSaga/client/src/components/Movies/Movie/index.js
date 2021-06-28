import { connect } from 'react-redux';
import Movie from './Movie.jsx';
import { deleteItem, updateItem } from '../../../store/movies/asyncActions';
import { getMovieById } from '../../../store/movies/selectors';

const mapStateToProps = (state, props) => ({
    movie: getMovieById(state, props),
});

const mapDispatchToProps = { deleteItem, updateItem };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
