import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { analyzeProfile } from './services/profileAnalyzer.js';
import { verifyImage } from './services/imageVerifier.js';
import { generateReport } from './services/reportGenerator.js';
import { logToBlockchain, getLogEntryById, getAllEntries } from './services/blockchainLogger.js';
import { authenticateJWT, generateToken } from './middleware/authMiddleware.js';
import { getAlerts, getAlertById, createAlert } from './services/alertService.js';
import { initializeDatabase } from './utils/dbConnection.js';
import { createReport, getReports } from './services/reportService.js';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enhanced CORS configuration with more permissive settings for development
app.use(cors({
  origin: '*', // Allow all origins for development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Disposition', 'Content-Length', 'Content-Type'],
  maxAge: 86400 // 24 hours in seconds
}));

app.use(express.json({ limit: '50mb' }));

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// API Endpoints
app.post('/api/analyze-profile', async (req, res) => {
  try {
    const { username, platform } = req.body;
    
    if (!username || !platform) {
      return res.status(400).json({ 
        error: 'Username and platform are required' 
      });
    }
    
    const allowedPlatforms = ['twitter', 'instagram', 'facebook', 'linkedin'];
    if (!allowedPlatforms.includes(platform.toLowerCase())) {
      return res.status(400).json({ 
        error: 'Invalid platform. Supported platforms: Twitter, Instagram, Facebook, LinkedIn' 
      });
    }
    
    const analysisResult = await analyzeProfile(username, platform);
    return res.json(analysisResult);
  } catch (error) {
    console.error('Error analyzing profile:', error);
    return res.status(500).json({ 
      error: 'Failed to analyze profile',
      message: error.message 
    });
  }
});

// Endpoint for image verification
app.post('/api/verify-image', upload.single('image'), async (req, res) => {
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
});

// Fixed endpoint for generating reports with better error handling and response formatting
app.post('/api/generate-report', async (req, res) => {
  try {
    const analysisData = req.body;
    
    if (!analysisData || !analysisData.username || !analysisData.platform) {
      console.error('Invalid analysis data received:', analysisData);
      return res.status(400).json({ 
        error: 'Invalid analysis data. Required fields are missing.' 
      });
    }
    
    console.log('Received request to generate report for:', analysisData.username);
    
    // Generate the PDF report
    const pdfBuffer = await generateReport(analysisData);
    
    if (!pdfBuffer || pdfBuffer.length === 0) {
      console.error('Generated PDF buffer is empty');
      return res.status(500).json({
        error: 'Failed to generate PDF content'
      });
    }
    
    console.log('Generated PDF buffer size:', pdfBuffer.length);
    
    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 
      `attachment; filename="report-${analysisData.username}-${analysisData.platform}-${Date.now()}.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.setHeader('Cache-Control', 'no-cache');
    
    // Send the PDF file
    return res.end(pdfBuffer);
  } catch (error) {
    console.error('Error generating report:', error);
    return res.status(500).json({ 
      error: 'Failed to generate report',
      message: error.message 
    });
  }
});

// NEW ENDPOINT: Log alert to blockchain/IPFS
app.post('/api/log-alert', async (req, res) => {
  try {
    const alertData = req.body;
    
    if (!alertData || !alertData.profileData) {
      return res.status(400).json({ 
        error: 'Invalid alert data. Profile information is required.' 
      });
    }
    
    console.log('Received request to log alert for:', 
      alertData.profileData.username || 'Unknown profile');
    
    // Log the alert data to our simulated blockchain
    const logResult = await logToBlockchain(alertData);
    
    return res.status(201).json({
      success: true,
      message: 'Alert successfully logged to immutable ledger',
      referenceId: logResult.referenceId,
      timestamp: logResult.timestamp,
      blockNumber: logResult.blockNumber
    });
  } catch (error) {
    console.error('Error logging alert:', error);
    return res.status(500).json({ 
      error: 'Failed to log alert',
      message: error.message 
    });
  }
});

// Endpoint to retrieve a logged alert by reference ID
app.get('/api/log-alert/:referenceId', (req, res) => {
  try {
    const { referenceId } = req.params;
    
    if (!referenceId) {
      return res.status(400).json({ error: 'Reference ID is required' });
    }
    
    const logEntry = getLogEntryById(referenceId);
    
    if (!logEntry) {
      return res.status(404).json({ error: 'Log entry not found' });
    }
    
    return res.json({
      success: true,
      logEntry
    });
  } catch (error) {
    console.error('Error retrieving log entry:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve log entry',
      message: error.message 
    });
  }
});

// Endpoint to get all blockchain entries (for demonstration purposes)
app.get('/api/log-alerts', (req, res) => {
  try {
    const entries = getAllEntries();
    return res.json({
      success: true,
      count: entries.length,
      entries
    });
  } catch (error) {
    console.error('Error retrieving logs:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve logs',
      message: error.message 
    });
  }
});

// NEW ENDPOINT: Submit suspicious profile report
app.post('/api/report', async (req, res) => {
  try {
    const { username, platform, reason, screenshotUrl } = req.body;
    
    // Validate required fields
    if (!username || !platform || !reason) {
      return res.status(400).json({ 
        error: 'Username, platform, and reason are required fields' 
      });
    }
    
    // Validate platform
    const allowedPlatforms = ['twitter', 'instagram', 'facebook', 'linkedin'];
    if (!allowedPlatforms.includes(platform.toLowerCase())) {
      return res.status(400).json({ 
        error: 'Invalid platform. Supported platforms: Twitter, Instagram, Facebook, LinkedIn' 
      });
    }
    
    // Create the report
    const report = await createReport({
      username,
      platform: platform.toLowerCase(),
      reason,
      screenshotUrl: screenshotUrl || null
    });
    
    return res.status(201).json({
      success: true,
      message: 'Suspicious profile report submitted successfully',
      reportId: report._id
    });
  } catch (error) {
    console.error('Error submitting report:', error);
    return res.status(500).json({ 
      error: 'Failed to submit report',
      message: error.message 
    });
  }
});

// NEW ENDPOINT: Get reports (requires authentication)
app.get('/api/reports', authenticateJWT, async (req, res) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { status, platform } = req.query;
    
    // Get reports with filters and pagination
    const reportsResult = await getReports({ 
      page, 
      limit, 
      status, 
      platform
    });
    
    return res.json({
      success: true,
      ...reportsResult
    });
  } catch (error) {
    console.error('Error fetching reports:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch reports',
      message: error.message 
    });
  }
});

// NEW ENDPOINT: Secure alerts API with JWT authentication and MongoDB integration
app.get('/api/alerts', authenticateJWT, async (req, res) => {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { platform, alertLevel, startDate, endDate, sortBy, sortOrder } = req.query;
    
    console.log('Fetching alerts with filters:', { 
      page, limit, platform, alertLevel, startDate, endDate, sortBy, sortOrder 
    });
    
    // Get alerts with filters and pagination
    const alertsResult = await getAlerts({ 
      page, 
      limit, 
      platform, 
      alertLevel, 
      startDate, 
      endDate,
      sortBy: sortBy || 'createdAt',
      sortOrder: sortOrder || 'desc'
    });
    
    return res.json({
      success: true,
      ...alertsResult
    });
  } catch (error) {
    console.error('Error in /api/alerts endpoint:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch alerts',
      message: error.message 
    });
  }
});

// Get a specific alert by ID
app.get('/api/alerts/:id', authenticateJWT, async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Alert ID is required' });
    }
    
    const alert = await getAlertById(id);
    
    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }
    
    return res.json({
      success: true,
      alert
    });
  } catch (error) {
    console.error('Error retrieving alert:', error);
    return res.status(500).json({ 
      error: 'Failed to retrieve alert',
      message: error.message 
    });
  }
});

// Create a new alert (for testing purposes)
app.post('/api/alerts', authenticateJWT, async (req, res) => {
  try {
    const alertData = req.body;
    
    if (!alertData || !alertData.profileData) {
      return res.status(400).json({ 
        error: 'Invalid alert data. Profile information is required.' 
      });
    }
    
    const alert = await createAlert(alertData);
    
    return res.status(201).json({
      success: true,
      message: 'Alert created successfully',
      alert
    });
  } catch (error) {
    console.error('Error creating alert:', error);
    return res.status(500).json({ 
      error: 'Failed to create alert',
      message: error.message 
    });
  }
});

// Development endpoint to generate a test token (would be removed in production)
if (process.env.NODE_ENV === 'development') {
  app.post('/api/auth/test-token', (req, res) => {
    const testUser = {
      id: '1',
      email: 'admin@example.com',
      roles: ['admin']
    };
    
    const token = generateToken(testUser);
    
    res.json({
      success: true,
      token,
      user: testUser,
      expires: 'in 1 hour'
    });
  });
}

// Initialize database connection when the server starts
initializeDatabase().then(initialized => {
  if (initialized) {
    console.log('Database initialized successfully');
  } else {
    console.warn('Database initialization failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
