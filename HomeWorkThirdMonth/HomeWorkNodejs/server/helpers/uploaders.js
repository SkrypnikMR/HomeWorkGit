require('dotenv/config');
const uuid = require('uuid/v4');
const AWS = require('aws-sdk');
const sharp = require('sharp');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
})

const fileUploader = async (req, res) => {
    const myFile = req.file.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME_FILES,
            Key: `file-${myFile[0]}-${uuid()}.${fileType}`,
            Body: req.file.buffer
        }
        const result = await s3.upload(params).promise().catch((e) => res.status(500).json({ message: 'server error' }));
        return res.status(200).json({ fileLink: result.Location });
    } catch (e) { res.status(500).json({ message: 'server error' }) }
}

const imageUploader = async (req, size, name) => {
    try {
        const myFile = req.file.originalname.split('.');
        const fileType = myFile[myFile.length - 1];

        const sizedImage = await sharp(req.file.buffer).resize({ width: size, height: size }).toBuffer();
        const params = { Bucket: process.env.AWS_BUCKET_NAME_IMAGES, Key: `${name}${myFile[0]}-${uuid()}.${fileType}`, Body: sizedImage }
        const result = await s3.upload(params).promise();

        return result.Location;
    } catch (e) {
        res.status(500).json({ message: 'server error' })
    }

}

module.exports = { fileUploader, imageUploader }