const express = require('express');
const { addImage, getImage, upload } = require('../controllers/images');

const router = express.Router();

router.post('/add', upload.single('image'), addImage);
router.get('/:id', getImage);

module.exports = router;
