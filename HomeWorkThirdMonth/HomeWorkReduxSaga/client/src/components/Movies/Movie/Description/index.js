import Description from './Description';
import { connect } from 'react-redux';
import { updateMovie } from '../../../../store/movies/actions';
import { getMovieField } from '../../../../store/movies/selectors';

const mapStateToProps = (state, props) => ({
    description: getMovieField(state, props),
});

const mapDispatchToProps = { updateMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Description);