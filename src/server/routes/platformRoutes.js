
import express from 'express';
import { platformNotifyController } from '../controllers/platformController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/platform-notify', authenticateJWT, platformNotifyController);

export default router;
