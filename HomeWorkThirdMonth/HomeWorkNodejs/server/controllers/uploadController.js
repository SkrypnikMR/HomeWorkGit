const { fileUploader, imageUploader } = require('../helpers/uploaders');
module.exports = async (req, res) => {
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
}
