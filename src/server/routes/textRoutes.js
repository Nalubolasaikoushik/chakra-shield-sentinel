
import express from 'express';
import { analyzeText } from '../controllers/textController.js';
import { validateTextAnalysis } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/analyze-text', validateTextAnalysis, analyzeText);

export default router;
