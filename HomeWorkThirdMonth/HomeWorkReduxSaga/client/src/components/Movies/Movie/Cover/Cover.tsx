import React, { useState } from 'react';
import Input from '../../../Input';
import './Cover.scss';
import { NotificationManager } from 'react-notifications';
import { defaultImage } from '../../../../constants/uiConstants';

interface ICover {
    name: string;
    id: string;
    cover: string;
    updateMovie: (id: IpdateMovie) => void;
}

interface IpdateMovie {
    id: string;
    changeParam: string;
    newData: string;
}

const Cover = ({ name, id, cover, updateMovie }: ICover) => {
    const [state, setState] = useState({
        isWaitForChange: false,
        changeParam: 'cover',
        newData: '',
        error: false,
    });
    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => setState({ ...state, newData: e.target.value });
    const onError = () => setState({ ...state, error: true })
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
                    : <img src={state.error
                        ? defaultImage
                        : cover}
                        onError={onError}
                        onDoubleClick={handleOnDoubleClick}
                    />
            }
        </>
    );

}

export default Cover;