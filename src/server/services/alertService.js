
import { getCollection } from '../utils/dbConnection.js';
import { ObjectId } from 'mongodb';

// Collection name
const ALERTS_COLLECTION = 'alerts';

// Fetch alerts with filtering and pagination
export async function getAlerts({ 
  page = 1, 
  limit = 10, 
  platform = null, 
  alertLevel = null, 
  startDate = null, 
  endDate = null,
  sortBy = 'createdAt',
  sortOrder = 'desc'
}) {
  try {
    // Build query filter
    const filter = {};
    
    // Add platform filter if specified
    if (platform) {
      filter.platform = platform;
    }
    
    // Add alert level filter if specified
    if (alertLevel) {
      filter.alertLevel = alertLevel;
    }
    
    // Add date range filter if specified
    if (startDate || endDate) {
      filter.createdAt = {};
      
      if (startDate) {
        filter.createdAt.$gte = new Date(startDate);
      }
      
      if (endDate) {
        filter.createdAt.$lte = new Date(endDate);
      }
    }
    
    // Get collection
    const alertsCollection = await getCollection(ALERTS_COLLECTION);
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Define sort options
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    // Execute query
    const alerts = await alertsCollection
      .find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .toArray();
    
    // Get total count for pagination
    const totalCount = await alertsCollection.countDocuments(filter);
    
    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);
    
    return {
      data: alerts,
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
    console.error('Error fetching alerts:', error);
    throw error;
  }
}

// Get alert by ID
export async function getAlertById(id) {
  try {
    const alertsCollection = await getCollection(ALERTS_COLLECTION);
    const alert = await alertsCollection.findOne({ _id: new ObjectId(id) });
    return alert;
  } catch (error) {
    console.error('Error fetching alert by ID:', error);
    throw error;
  }
}

// Insert a new alert
export async function createAlert(alertData) {
  try {
    const alertsCollection = await getCollection(ALERTS_COLLECTION);
    
    // Add creation timestamp
    const alert = {
      ...alertData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await alertsCollection.insertOne(alert);
    return { ...alert, _id: result.insertedId };
  } catch (error) {
    console.error('Error creating alert:', error);
    throw error;
  }
}
