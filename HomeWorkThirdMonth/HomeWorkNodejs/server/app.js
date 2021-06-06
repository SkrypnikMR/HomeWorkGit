require('dotenv/config');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT;
const uploadController = require('./controllers/uploadController');
const { upload } = require('./helpers/uploaders');
const MySQL = require('./controllers/mySQLConnectController');
const app = express();
const mySQL = new MySQL();
const { getBooks, postBook, updateBook } = mySQL;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post('/upload', upload, uploadController);
app.get('/books', getBooks);
app.post('/books', postBook);
app.put('/books', updateBook);


app.listen(PORT, () => console.log('server run on:', PORT));


