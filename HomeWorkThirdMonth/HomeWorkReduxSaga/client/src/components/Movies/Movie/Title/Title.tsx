import React, { useState } from 'react';
import Button from '../../../Button';
import Input from '../../../Input';
import './Title.scss';
import { NotificationManager } from 'react-notifications';

interface ITitle {
    name: string;
    id: string;
    title: string;
    updateMovie: (id: IpdateMovie) => void;
    deleteMovie: (id: string) => void;
}

interface IpdateMovie {
    id: string;
    changeParam: string;
    newData: string;
}

const Title = ({ name, id, title, updateMovie, deleteMovie }: ITitle) => {
    const [state, setState] = useState({
        isWaitForChange: false,
        changeParam: 'title',
        newData: '',
    });
    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>) => setState({ ...state, newData: e.target.value });
    const handleDeleteItem = () => deleteMovie(id);
    const handleOnDoubleClick = () => setState((state) => ({ ...state, isWaitForChange: !state.isWaitForChange }));
    const handleOnBlur = async (e :React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setState({ ...state, isWaitForChange: false });
            return NotificationManager.error('Please Enter newData for field', 'INPUT ERROR', 2000);
        }
        const { changeParam, newData } = state;
        setState({ ...state, isWaitForChange: false });
        await updateMovie({ changeParam, newData, id: id });
    }

    return (
        <div className="movie__header" >
            {
                state.isWaitForChange ? (
                    <Input
                        name={name}
                        onBlurInput={handleOnBlur}
                        onChangeInput={handleOnChange}
                        placeholder='enter new title'
                        value={state.newData}
                    />
                )
                    : (
                        <h5 onDoubleClick={handleOnDoubleClick}>
                            {title}
                        </h5>
                    )
            }
            <Button onButtonClick={handleDeleteItem} title="X" />
        </div>
    );
}



export default Title;