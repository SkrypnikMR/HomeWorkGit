import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Loader from '../Loader';
import './Movies.scss';

class Movies extends Component {
    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render() {
        const { movies, isLoading } = this.props;

        return (
            <div className='movies'>
                {isLoading
                    ? <Loader />
                    : null}
                {movies.map((movie) => (<Movie id={movie.id} key={movie.id} />))}
            </div>
        );
    }
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    getMovies: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Movies;
