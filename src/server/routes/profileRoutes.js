
import express from 'express';
import { analyzeProfileController } from '../controllers/profileController.js';
import { validateProfileAnalysis } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/analyze-profile', validateProfileAnalysis, analyzeProfileController);

export default router;
