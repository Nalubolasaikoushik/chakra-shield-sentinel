
import mongoose from 'mongoose';
import { getCollection } from '../utils/dbConnection.js';

// Collection name for storing platform notification attempts
const NOTIFICATION_COLLECTION = 'platformNotifications';

/**
 * Notifies a platform about a suspicious or fake account
 * @param {String} username - The username of the account
 * @param {String} platform - The platform (twitter, facebook, etc.)
 * @param {Object} evidence - Evidence data for the takedown request
 * @param {String} alertLevel - Severity level of the alert
 * @returns {Object} Result of the notification attempt
 */
export async function notifyPlatform(username, platform, evidence, alertLevel) {
  try {
    // Store the notification attempt
    const notificationsCollection = await getCollection(NOTIFICATION_COLLECTION);
    
    const notificationRecord = {
      username,
      platform,
      evidence: evidence || {},
      alertLevel: alertLevel || 'medium',
      requestedBy: 'system', // In a real app, this would be the user ID
      timestamp: new Date(),
      status: 'pending'
    };
    
    // Insert the record
    const result = await notificationsCollection.insertOne(notificationRecord);
    
    // Generate a reference ID
    const referenceId = result.insertedId.toString();
    
    // Simulate platform API integration
    const platformResponse = await simulatePlatformAPI(platform, username, evidence);
    
    // Update the notification record with the response
    await notificationsCollection.updateOne(
      { _id: result.insertedId },
      { 
        $set: { 
          status: platformResponse.success ? 'accepted' : 'failed',
          platformResponse: platformResponse,
          updatedAt: new Date()
        } 
      }
    );
    
    return {
      referenceId,
      status: platformResponse.success ? 'accepted' : 'failed',
      platformMessage: platformResponse.message
    };
  } catch (error) {
    console.error('Error in platform notification service:', error);
    throw new Error(`Platform notification failed: ${error.message}`);
  }
}

/**
 * Mock function to simulate calling platform APIs
 * In a real implementation, this would use actual API calls to each platform
 */
async function simulatePlatformAPI(platform, username, evidence) {
  // Add a small delay to simulate network call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Success is random for demo purposes
  const success = Math.random() > 0.3;
  
  // Platform-specific responses
  const responses = {
    twitter: {
      success,
      message: success 
        ? 'Report received and under review by Twitter Trust & Safety team' 
        : 'Twitter API rate limit exceeded, please try again later',
      caseNumber: success ? `TW-${Date.now().toString().substr(-6)}` : null
    },
    facebook: {
      success,
      message: success 
        ? 'Case opened with Facebook Community Operations team' 
        : 'Invalid Facebook API token, authentication failed',
      caseNumber: success ? `FB-${Date.now().toString().substr(-6)}` : null
    },
    instagram: {
      success,
      message: success 
        ? 'Report submitted to Instagram Security team' 
        : 'Instagram API connection timed out',
      caseNumber: success ? `IG-${Date.now().toString().substr(-6)}` : null
    },
    telegram: {
      success,
      message: success 
        ? 'Telegram admin notified about suspicious account' 
        : 'Telegram API requires admin privileges',
      caseNumber: success ? `TG-${Date.now().toString().substr(-6)}` : null
    }
  };
  
  return responses[platform] || {
    success: false,
    message: 'Unsupported platform',
    caseNumber: null
  };
}

/**
 * Get all platform notification attempts with filtering and pagination
 */
export async function getNotificationAttempts({ 
  page = 1, 
  limit = 10, 
  platform = null, 
  status = null,
  sortBy = 'timestamp',
  sortOrder = 'desc'
}) {
  try {
    // Build query filter
    const filter = {};
    
    if (platform) {
      filter.platform = platform;
    }
    
    if (status) {
      filter.status = status;
    }
    
    // Get collection
    const notificationsCollection = await getCollection(NOTIFICATION_COLLECTION);
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Define sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    // Execute query
    const notifications = await notificationsCollection
      .find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .toArray();
    
    // Get total count for pagination
    const totalCount = await notificationsCollection.countDocuments(filter);
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);
    
    return {
      data: notifications,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    console.error('Error fetching platform notifications:', error);
    throw error;
  }
}

/**
 * Get notification by ID
 */
export async function getNotificationById(id) {
  try {
    const notificationsCollection = await getCollection(NOTIFICATION_COLLECTION);
    const notification = await notificationsCollection.findOne({ _id: new mongoose.Types.ObjectId(id) });
    return notification;
  } catch (error) {
    console.error('Error fetching notification by ID:', error);
    throw error;
  }
}
