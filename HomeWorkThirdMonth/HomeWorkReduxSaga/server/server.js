const express = require('express');
const cors = require('cors');
const app = express();
const MovieExpert = require('./classes/MovieExpert');
const movieExpert = new MovieExpert('./files/movies.json');

const { getMovies, addMovie, deleteMovie, updateMovie } = movieExpert;

app.use(cors());
app.use(express.json());


app.get('/app/movies', getMovies);
app.post('/app/movies', addMovie);
app.put('/app/movies', updateMovie);
app.delete('/app/movies', deleteMovie);


app.listen(5246, () => console.log(`server are alive!!! in port ${5246}`));
