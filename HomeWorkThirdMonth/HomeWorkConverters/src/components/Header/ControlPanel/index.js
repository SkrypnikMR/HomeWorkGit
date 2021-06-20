import { connect } from 'react-redux';
import ControlPanel from './ControlPanel.jsx';
import { setConverterType, setConverterFrom, setConverterTo } from '../../../store/converter/actions';

const MapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
    setConverterType: payload => dispatch(setConverterType(payload)),
    setConverterFrom: payload => dispatch(setConverterFrom(payload)),
    setConverterTo: payload => dispatch(setConverterTo(payload)),
});

export default connect(MapStateToProps, mapDispatchToProps)(ControlPanel);
