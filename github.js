// github/github.js

const axios = require('axios');
require('dotenv').config();

// GitHub API Configuration
const GITHUB_TOKEN = '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';
const GITHUB_REPO = 'Omar25876/E-commerce-Image-Storage-ITI';
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents`;

// Get folder name based on fileName
const getFolderByFileName = (fileName) => {
  switch (fileName) {
    case '1':
      return 'products'; 
    case '2':
      return 'category';
    case '3':
      return 'brands'; 
    case '4':
      return 'account'; 
    default:
      throw new Error('Invalid fileName parameter');
  }
};

// Upload file to GitHub
async function uploadImageToGitHub(file, fileName) {
  try {
    // Determine the folder based on the fileName parameter
    const folder = getFolderByFileName(fileName);

    // Convert file data to base64
    const fileContent = file.buffer.toString('base64');
        // Generate a timestamp
        const timestamp = Date.now();

        // Extract file extension
        const fileExtension = file.originalname.split('.').pop();
    
        // Create a unique filename with timestamp
        const uniqueFileName = `${file.originalname.split('.')[0]}_${timestamp}.${fileExtension}`;
    
        // Prepare the URL for the GitHub API
        const url = `${GITHUB_API_URL}/${folder}/${uniqueFileName}`;

    // Prepare the data to be sent to GitHub
    const data = {
      message: `Upload ${file.originalname}`,
      content: fileContent,
    };

    // Make the API request to upload the file
    const response = await axios.put(url, data, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    // Return the download URL of the uploaded file
    return response.data.content.download_url;
  } catch (error) {
    console.error('Error uploading to GitHub:', error);
    throw new Error('Error uploading file to GitHub');
  }
}

module.exports = {
  uploadImageToGitHub,
};
