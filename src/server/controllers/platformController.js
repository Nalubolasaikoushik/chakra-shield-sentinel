
import { notifyPlatform } from '../services/platformService.js';

export const platformNotifyController = async (req, res) => {
  try {
    const { username, platform, evidence, alertLevel } = req.body;
    
    if (!username || !platform) {
      return res.status(400).json({ 
        error: 'Username and platform are required' 
      });
    }
    
    const allowedPlatforms = ['twitter', 'instagram', 'facebook', 'telegram'];
    if (!allowedPlatforms.includes(platform.toLowerCase())) {
      return res.status(400).json({ 
        error: 'Invalid platform. Supported platforms: Twitter, Instagram, Facebook, Telegram' 
      });
    }
    
    // Call the platform notification service
    const result = await notifyPlatform(username, platform, evidence, alertLevel);
    
    return res.status(200).json({
      success: true,
      message: `Notification sent to ${platform} for user ${username}`,
      referenceId: result.referenceId,
      status: result.status
    });
  } catch (error) {
    console.error('Error notifying platform:', error);
    return res.status(500).json({ 
      error: 'Failed to notify platform',
      message: error.message 
    });
  }
};
