const axios = require('axios');
require('dotenv').config();
// GitHub API Configuration
// GitHub API Configuration
const GITHUB_TOKEN = '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';
const GITHUB_REPO = 'Omar25876/E-commerce-Image-Storage-ITI';
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents`;

/**
 * Uploads an image file to a specific folder in the GitHub repository.
 * @param {Object} file - The uploaded file object from multer.
 * @param {string} folderPath - The path in the GitHub repo where the file should be stored.
 * @returns {string} The download URL of the uploaded file.
 */
async function uploadImageToGitHub(file, folderPath) {
  try {
    // Convert file to base64
    const fileContent = file.buffer.toString('base64');

    // Get extension and build a unique filename
    const fileExtension = file.originalname.split('.').pop();
    const timestamp = Date.now();
    const uniqueFileName = `${file.originalname.split('.')[0]}_${timestamp}.${fileExtension}`;

    // Full GitHub path (e.g., products/InEar/JBL/Jr310/uniqueFile.png)
    const githubPath = `${folderPath}/${uniqueFileName}`;
    const url = `${GITHUB_API_URL}/${githubPath}`;

    // Upload content
    const response = await axios.put(url, {
      message: `Upload ${file.originalname}`,
      content: fileContent,
    }, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.content.download_url;
  } catch (error) {
    console.error('Error uploading to GitHub:', error.response?.data || error.message);
    throw new Error('Failed to upload image to GitHub');
  }
}

module.exports = {
  uploadImageToGitHub,
};
