import { connect } from 'react-redux';
import { getTablo, getFrom, getTo, getNotes } from '../../../store/converter/selectors';
import { setNotes } from '../../../store/converter/actions';
import Tablo from './Tablo.jsx';

const mapStateToProps = state => ({
    to: getTo(state),
    from: getFrom(state),
    notes: getNotes(state),
    tablo: getTablo(state),
});
const mapDispatchToProps = dispatch => ({ setNotes: payload => dispatch(setNotes(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(Tablo);
