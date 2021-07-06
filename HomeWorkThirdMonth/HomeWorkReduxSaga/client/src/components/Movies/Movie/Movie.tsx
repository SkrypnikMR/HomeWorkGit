import React from 'react';
import Title from './Title';
import Cover from './Cover';
import Description from './Description';
import './Movie.scss';

interface IMovie { id: string;}

const Movie = ({ id }: IMovie) => {
    return (
        <div className="movie" >
            <Title name='title' id={id} />
            <Cover name="cover" id={id} />
            <Description name="description" id={id} />
        </div>
    );
}


export default React.memo(Movie);
