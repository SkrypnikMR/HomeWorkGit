import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import Input from '../../../Input';
import './Description.scss';

interface IDescription {
    name: string;
    id: string;
    description: string;
    updateMovie: (id: IpdateMovie) => void;
}

interface IpdateMovie {
    id: string;
    changeParam: string;
    newData: string;
}

const Description = ({ name, id, description, updateMovie }: IDescription) => {
    const [state, setState] = useState({
        isWaitForChange: false,
        changeParam: 'description',
        newData: '',
    });
    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => setState({ ...state, newData: e.target.value });
    const handleOnDoubleClick = () => setState((state) => ({ ...state, isWaitForChange: !state.isWaitForChange }));
    const handleOnBlur = async (e : React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setState({ ...state, isWaitForChange: false });
            return NotificationManager.error('Please Enter newData for field', 'INPUT ERROR', 2000);
        }
        const { changeParam, newData } = state;
        setState({ ...state, isWaitForChange: false });
        await updateMovie({ changeParam, newData, id: id });
    }

    return (
        <div className="movie__description-wrapper">
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
                    : <p onDoubleClick={handleOnDoubleClick} >{description}</p>
            }
        </div>
    );

}

export default Description;