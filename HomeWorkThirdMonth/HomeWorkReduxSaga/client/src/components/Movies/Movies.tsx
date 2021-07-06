import React, { useEffect } from 'react';
import Movie from './Movie';
import Loader from '../Loader';
import './Movies.scss';

interface IMovies {
    getMovies: () => void;
    movies: { id: string; }[];
    isLoading: boolean;
}

const Movies = ({ getMovies, movies, isLoading }: IMovies) => {
    useEffect(() => { getMovies() }, []);
    return (
        <div className='movies'>
            {isLoading
                ? <Loader />
                : null}
            {movies.map((movie) => (<Movie id={movie.id} key={movie.id} />))}
        </div>
    );
}


export default Movies;
