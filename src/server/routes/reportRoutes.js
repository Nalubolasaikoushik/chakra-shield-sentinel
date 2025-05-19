
import express from 'express';
import { createReportController, getReportsController, generatePdfReportController } from '../controllers/reportController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';
import { validateReportSubmission, validatePagination, validateReportGeneration } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/report', validateReportSubmission, createReportController);
router.get('/reports', authenticateJWT, validatePagination, getReportsController);
router.post('/generate-report', validateReportGeneration, generatePdfReportController);

export default router;
