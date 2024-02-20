const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');
const { Binary } = require('mongodb');

const Image = mongoose.model('Image', {
  title: String,
  image: {
    type: Buffer,
  },
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addImage = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file.buffer;

    const newImage = new Image({
      title,
      image: new Binary(image),
    });

    await newImage.save();
    /////Cambiar la devulcion a el id de la imagen
    res.status(201).json({ imageid: newImage._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getImage = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    
    res.status(200).send(`data:image/jpeg;base64, ${image.image.toString('base64')}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addImage, getImage, upload };
