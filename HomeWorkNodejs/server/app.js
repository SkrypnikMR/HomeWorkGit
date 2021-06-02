require('dotenv/config');
const cors = require('cors');
const uuid = require('uuid/v4');
const multer = require('multer');
const express = require('express');
const PORT = process.env.PORT;

const app = express();
const { fileUploader, imageUploader } = require('./helpers/uploaders');


const storage = multer.memoryStorage({ destination: (req, res, cb) => cb(null, '') });
const upload = multer({ storage, limits: { fileSize: 20971520 } }).single('file');

const corsOptions = {
    methods: ['POST', 'OPTIONS'],
    origins: '*',
    allowedHeaders: ['Content-Type', 'multipart/form-data']
}
app.use(cors());
app.post('/upload', upload, async (req, res) => {
    try {
        const mimeType = req.file.mimetype.split('/')[0];
        if (mimeType !== 'image') return await fileUploader(req, res);

        const imageLinks = {
            small: await imageUploader(req, 500, 'small-'),
            medium: await imageUploader(req, 1024, 'medium-'),
            large: await imageUploader(req, 2048, 'large-')
        }
        return res.status(200).json(imageLinks);
    } catch (e) { console.log(e); res.status(500).json({ message: 'server error' }) }
})

app.listen(PORT, () => console.log('server run on:', PORT));


