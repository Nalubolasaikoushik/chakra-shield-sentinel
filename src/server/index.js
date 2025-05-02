
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { analyzeProfile } = require('./services/profileAnalyzer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
