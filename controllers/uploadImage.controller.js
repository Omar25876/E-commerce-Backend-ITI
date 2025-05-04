const { uploadImageToGitHub } = require('../github');
const multer = require('multer');

// Set up multer for in-memory file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Controller handler
const uploadImage = async (req, res) => {
  try {
    const folderPath = req.query.folderPath;

    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    if (!folderPath) {
      return res.status(400).json({ message: 'folderPath query is required' });
    }

    const imageUrl = await uploadImageToGitHub(req.file, folderPath);
    res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Image upload failed', error: error.message });
  }
};

module.exports = {
  uploadImage,
  uploadMiddleware: upload.single('image'),
};
