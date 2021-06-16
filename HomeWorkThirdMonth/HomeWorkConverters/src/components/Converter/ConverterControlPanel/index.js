
import { connect } from 'react-redux';
import ConverterControlPanel from './ConverterControlPanel.jsx';
import { setConverterType, setConverterTo, setConverterFrom, setConverterQuantity, setConverterTablo } from '../../../store/converter/actions';

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({
    setConverterType: payload => dispatch(setConverterType(payload)),
    setConverterTo: payload => dispatch(setConverterTo(payload)),
    setConverterFrom: payload => dispatch(setConverterFrom(payload)),
    setConverterQuantity: payload => dispatch(setConverterQuantity(payload)),
    setConverterTablo: payload => dispatch(setConverterTablo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConverterControlPanel);
