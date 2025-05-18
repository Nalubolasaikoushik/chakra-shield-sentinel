
import { verifyImage } from '../services/imageVerifier.js';

export const verifyImageController = async (req, res) => {
  try {
    let imageData;
    
    // Get image data either from file upload or base64 string
    if (req.file) {
      // Image was uploaded as a file
      imageData = {
        buffer: req.file.buffer,
        mimetype: req.file.mimetype,
        originalname: req.file.originalname
      };
    } else if (req.body.base64Image) {
      // Image was sent as base64
      const base64Data = req.body.base64Image.split(';base64,').pop();
      imageData = {
        buffer: Buffer.from(base64Data, 'base64'),
        mimetype: req.body.mimetype || 'image/jpeg',
        originalname: req.body.filename || 'uploaded-image.jpg'
      };
    } else {
      return res.status(400).json({
        error: 'No image provided. Please upload an image file or provide a base64 string.'
      });
    }
    
    // Process the image
    const verificationResult = await verifyImage(imageData);
    return res.json(verificationResult);
    
  } catch (error) {
    console.error('Error verifying image:', error);
    return res.status(500).json({
      error: 'Failed to verify image',
      message: error.message
    });
  }
};
