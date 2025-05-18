
import express from 'express';
import multer from 'multer';
import { verifyImageController } from '../controllers/imageController.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

router.post('/verify-image', upload.single('image'), verifyImageController);

export default router;
