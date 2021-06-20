import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StTablo, StP, StSpan } from './styled';
import { support } from '../../../helpers/support';

class Tablo extends Component {
    shouldComponentUpdate(nextProps) {
        const { tablo } = this.props;
        return nextProps.tablo !== tablo;
    }

    componentDidUpdate(prevProps) {
        const { tablo, from, to, setNotes, notes } = this.props;
        if (tablo && prevProps.tablo !== tablo) {
            const { lsGet, lsSet } = support;
            const lsNotes = lsGet('notes');
            if (lsNotes) {
                lsNotes.push({ tablo, from, to });
                lsSet('notes', lsNotes);
            } else {
                lsSet('notes', [{ tablo, from, to }]);
            }
            notes.push({ tablo, from, to });
            setNotes(notes);
        }
    }

    render() {
        const { tablo, from, to } = this.props;
        return tablo ? (
            <StTablo>
                <StP>
                    We get
                    <StSpan color="yellow">{tablo}</StSpan>
                    <StSpan>{from.toUpperCase()}</StSpan>
                    from
                    <StSpan>{to.toUpperCase()}</StSpan>
                </StP>
            </StTablo>
        ) : <StTablo />;
    }
}

Tablo.propTypes = {
    tablo: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    setNotes: PropTypes.func,
    notes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Tablo;
