const fs = require('fs');
const uuid = require('uuid').v4;

class MovieExpert {
    constructor(path) { this.path = path };
    getMovies = (_req, res) => {
        try {
            const serverAnswer = this.#getArrayFromFile(this.path);
            res.status(200).json(serverAnswer);
        } catch (e) { res.status(400).json({ message: 'bad request' }); }
    }
    addMovie = (req, res) => {
        try {
            const movies = this.#getArrayFromFile(this.path);
            const movie = {
                id: uuid(),
                title: req.body.title,
                cover: req.body.cover,
                description: req.body.description
            }
            movies.unshift(movie)
            fs.writeFileSync(this.path, JSON.stringify(movies));
            res.status(200).json({ message: 'accept' });
        } catch (e) { res.status(400).json({ message: 'bad request' }); }
    }
    deleteMovie = (req, res) => {
        try {
            if (!req.body.id) return res.status(400).json({ message: 'bad request' })
            let movies = this.#getArrayFromFile(this.path);
            movies = movies.filter(movie => movie.id !== req.body.id);
            fs.writeFileSync(this.path, JSON.stringify(movies));
            res.status(200).json({ message: 'done' });

        } catch (e) { res.status(400).json({ message: 'bad request' }) }
    }
    updateMovie = (req, res) => {
        try {
            if (!req.body.id) return res.status(400).json({ message: 'bad request' })
            let movies = this.#getArrayFromFile(this.path);
            movies = movies.map(movie => {
                if (movie.id === req.body.id) movie[req.body.changeParam] = req.body.newData;
                return movie;
            })
            fs.writeFileSync(this.path, JSON.stringify(movies));
            res.status(200).json({ message: 'done' });
        } catch (e) { res.status(400).json({ message: 'bad request' }) }
    }
    #getArrayFromFile = (path) => JSON.parse(fs.readFileSync(path))
}

module.exports = MovieExpert;
