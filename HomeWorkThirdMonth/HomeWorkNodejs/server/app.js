require('dotenv/config');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT;
const uploadController = require('./controllers/uploadController');
const {upload} = require('./helpers/uploaders');

const app = express();

app.use(cors());
app.post('/upload', upload, uploadController)

app.listen(PORT, () => console.log('server run on:', PORT));


