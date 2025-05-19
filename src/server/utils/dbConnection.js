
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB Connection URL
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB_NAME || 'profilealerts';

// Connection state
let isConnected = false;

/**
 * Connect to MongoDB using Mongoose
 */
export async function connectToDatabase() {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    // Connect to MongoDB with Mongoose
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
      maxPoolSize: 10
    });

    isConnected = true;
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

/**
 * Legacy method for backward compatibility with non-mongoose code
 */
export async function getCollection(collectionName) {
  await connectToDatabase();
  return mongoose.connection.db.collection(collectionName);
}

/**
 * Initialize database with required collections and indexes
 */
export async function initializeDatabase() {
  try {
    await connectToDatabase();
    
    // Get references to collections
    const db = mongoose.connection.db;
    
    // Create alerts collection if it doesn't exist
    if (!(await db.listCollections({ name: 'alerts' }).toArray()).length) {
      await db.createCollection('alerts');
      
      // Create indexes for better query performance
      const alertsCollection = db.collection('alerts');
      await alertsCollection.createIndex({ createdAt: -1 });
      await alertsCollection.createIndex({ platform: 1 });
      await alertsCollection.createIndex({ alertLevel: 1 });
      
      console.log('Alerts collection and indexes created');
    }
    
    // Create reports collection if it doesn't exist
    if (!(await db.listCollections({ name: 'reports' }).toArray()).length) {
      await db.createCollection('reports');
      
      // Create indexes for better query performance
      const reportsCollection = db.collection('reports');
      await reportsCollection.createIndex({ createdAt: -1 });
      await reportsCollection.createIndex({ platform: 1 });
      await reportsCollection.createIndex({ status: 1 });
      
      console.log('Reports collection and indexes created');
    }

    // Create textAnalysis collection if it doesn't exist
    if (!(await db.listCollections({ name: 'textanalyses' }).toArray()).length) {
      await db.createCollection('textanalyses');
      
      // Create indexes for better query performance
      const textAnalysisCollection = db.collection('textanalyses');
      await textAnalysisCollection.createIndex({ createdAt: -1 });
      await textAnalysisCollection.createIndex({ sentiment: 1 });
      await textAnalysisCollection.createIndex({ toxicityScore: 1 });
      
      console.log('Text analysis collection and indexes created');
    }
    
    // Create platformNotifications collection if it doesn't exist
    if (!(await db.listCollections({ name: 'platformNotifications' }).toArray()).length) {
      await db.createCollection('platformNotifications');
      
      // Create indexes for better query performance
      const notificationsCollection = db.collection('platformNotifications');
      await notificationsCollection.createIndex({ timestamp: -1 });
      await notificationsCollection.createIndex({ platform: 1 });
      await notificationsCollection.createIndex({ status: 1 });
      await notificationsCollection.createIndex({ username: 1 });
      
      console.log('Platform notifications collection and indexes created');
    }
    
    return true;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    return false;
  }
}
