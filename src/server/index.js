
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { initializeDatabase } from './utils/dbConnection.js';
import { generateToken } from './middleware/authMiddleware.js';

// Import routes
import profileRoutes from './routes/profileRoutes.js';
import textRoutes from './routes/textRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import alertRoutes from './routes/alertRoutes.js';
import platformRoutes from './routes/platformRoutes.js';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

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
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// API Routes
app.use('/api', profileRoutes);
app.use('/api', textRoutes);
app.use('/api', imageRoutes);
app.use('/api', reportRoutes);
app.use('/api', alertRoutes);
app.use('/api', platformRoutes);

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

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

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
