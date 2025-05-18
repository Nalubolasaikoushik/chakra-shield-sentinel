
import express from 'express';
import { 
  createAlertController,
  getAlertsController,
  getAlertByIdController,
  logAlertController,
  getLoggedAlertController,
  getLoggedAlertsController
} from '../controllers/alertController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Alert management routes
router.post('/alerts', authenticateJWT, createAlertController);
router.get('/alerts', authenticateJWT, getAlertsController);
router.get('/alerts/:id', authenticateJWT, getAlertByIdController);

// Blockchain logging routes
router.post('/log-alert', logAlertController);
router.get('/log-alert/:referenceId', getLoggedAlertController);
router.get('/log-alerts', getLoggedAlertsController);

export default router;
