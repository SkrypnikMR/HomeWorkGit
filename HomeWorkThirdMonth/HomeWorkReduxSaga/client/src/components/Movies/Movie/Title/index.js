import Title from './Title.jsx';
import { connect } from 'react-redux';
import { deleteMovie, updateMovie } from '../../../../store/movies/actions';
import { getMovieField } from '../../../../store/movies/selectors';

const mapStateToProps = (state, props) => ({
    title: getMovieField(state, props),
});

const mapDispatchToProps = { deleteMovie, updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Title);