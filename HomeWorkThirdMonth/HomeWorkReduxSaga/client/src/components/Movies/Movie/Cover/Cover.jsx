import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Input';
import './Cover.scss';
import { NotificationManager } from 'react-notifications';
import { defaultImage } from '../../../../constants/uiConstants';


const Cover = ({ name, id, cover, updateMovie }) => {
    const [state, setState] = useState({
        isWaitForChange: false,
        changeParam: 'cover',
        newData: '',
        error: false,
    });
    const handleOnChange = (e) => setState({ ...state, newData: e.target.value });
    const onError = () => setState({ ...state, error: true })
    const handleOnDoubleClick = () => setState((state) => ({ ...state, isWaitForChange: !state.isWaitForChange }));
    const handleOnBlur = async (e) => {
        if (e.target.value === '') {
            setState({ ...state, isWaitForChange: false });
            return NotificationManager.error('Please Enter newData for field', 'INPUT ERROR', 2000);
        }
        const { changeParam, newData } = state;
        setState({ ...state, isWaitForChange: false });
        await updateMovie({ changeParam, newData, id: id });
    }

    return (
        <>
            {
                state.isWaitForChange ? (
                    <div className="movie__cover">
                        <Input
                            name={name}
                            onBlurInput={handleOnBlur}
                            onChangeInput={handleOnChange}
                            placeholder='enter new cover'
                            value={state.newData}
                        />
                    </div>
                )
                    : <img src={state.error ? defaultImage : cover} onError={onError} onDoubleClick={handleOnDoubleClick} name={name} />
            }
        </>
    );

}

Cover.propTypes = {
    name: PropTypes.string.isRequired,
    cover: PropTypes.string,
    id: PropTypes.number.isRequired,
    updateMovie: PropTypes.func.isRequired
}

export default Cover;