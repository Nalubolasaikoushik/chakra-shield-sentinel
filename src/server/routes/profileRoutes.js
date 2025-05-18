
import express from 'express';
import { analyzeProfileController } from '../controllers/profileController.js';

const router = express.Router();

router.post('/analyze-profile', analyzeProfileController);

export default router;
