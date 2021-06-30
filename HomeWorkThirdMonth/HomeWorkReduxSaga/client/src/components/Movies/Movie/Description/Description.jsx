import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import PropTypes from 'prop-types';
import Input from '../../../Input';
import './Description.scss';



const Description = ({ name, id, description, updateMovie }) => {
    const [state, setState] = useState({
        isWaitForChange: false,
        changeParam: 'description',
        newData: '',
    });
    const handleOnChange = (e) => setState({ ...state, newData: e.target.value });
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
                    <div className="movie__description">
                        <Input
                            name={name}
                            onBlurInput={handleOnBlur}
                            onChangeInput={handleOnChange}
                            placeholder='enter new description'
                            value={state.newData}
                        />
                    </div>
                )
                    : <p onDoubleClick={handleOnDoubleClick} name="description">{description}</p>
            }
        </>
    );

}

Description.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    updateMovie: PropTypes.func.isRequired
}

export default Description;