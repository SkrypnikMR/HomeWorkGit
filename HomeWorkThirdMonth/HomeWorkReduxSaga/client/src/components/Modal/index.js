import { connect } from 'react-redux';
import Modal from './Modal';
import { postMovies } from '../../store/movies/actions';

const mapDispatchToProps = { postMovies };

export default connect(null, mapDispatchToProps)(Modal);
