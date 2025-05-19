
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
import { 
  validateAlertCreation, 
  validateAlertId, 
  validatePagination 
} from '../middleware/validationMiddleware.js';

const router = express.Router();

// Alert management routes
router.post('/alerts', authenticateJWT, validateAlertCreation, createAlertController);
router.get('/alerts', authenticateJWT, validatePagination, getAlertsController);
router.get('/alerts/:id', authenticateJWT, validateAlertId, getAlertByIdController);

// Blockchain logging routes
router.post('/log-alert', validateAlertCreation, logAlertController);
router.get('/log-alert/:referenceId', getLoggedAlertController);
router.get('/log-alerts', getLoggedAlertsController);

export default router;
