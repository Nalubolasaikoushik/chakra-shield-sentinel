
import express from 'express';
import { createReportController, getReportsController, generatePdfReportController } from '../controllers/reportController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/report', createReportController);
router.get('/reports', authenticateJWT, getReportsController);
router.post('/generate-report', generatePdfReportController);

export default router;
