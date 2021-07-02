import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Cover from './Cover';
import Description from './Description';
import './Movie.scss';

const Movie = ({ id }) => {
    return (
        <div className="movie" >
            <Title name='title' id={id} />
            <Cover name="cover" id={id} />
            <Description name="description" id={id} />
        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.string.isRequired
};

export default React.memo(Movie);
