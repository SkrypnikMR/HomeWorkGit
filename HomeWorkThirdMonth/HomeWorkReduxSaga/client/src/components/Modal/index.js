import { connect } from 'react-redux';
import Modal from './Modal.jsx';
import { postMovies } from '../../store/movies/asyncActions';

const mapDispatchToProps = { postMovies };

export default connect(null, mapDispatchToProps)(Modal);
